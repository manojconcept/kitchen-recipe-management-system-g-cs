import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { dropRecipeTypeList } from "../../utils/dropRecipeTypeList";
import { createRecipe } from "../../config/api/router/recipeApi";
import { Toastify } from "../../components/HelperComponents/Helper";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const recipeSchema = yup.object({
  name: yup.string().required('Please provide the recipe name'),
  image_url: yup.string().required('Please provide the image URL'),
  description: yup.string().required('Please provide the recipe description'),
  cuisine: yup.string().required('Please select cuisine'),
  course: yup.string().required('Please select course'),
  diet: yup.string().required('Please select diet'),
  prep_time: yup.number().required('Please provide the preparation time').positive('Preparation time must be a positive number'),
  ingredients: yup.string().required('Please provide at least one ingredient'),
  instructions: yup.string().required('Please provide the instructions'),
});

function CreateRecipe({ closeModalButton, submitModalButton }) {

  const formik = useFormik({
    initialValues: {
      name: "",
      image_url: "",
      description: "",
      cuisine: "",
      course: "",
      diet: "",
      prep_time: 0,
      ingredients: "",
      instructions: "",
      created: JSON.parse(sessionStorage.getItem('jwtToken')).userData.username,
      saved: ""
    },
    validationSchema: recipeSchema,
    onSubmit: async (values) => {
      let loadingToastId;
      try {
        loadingToastId = toast.loading('Creating Recipe...');
        const response = await createRecipe(values);
        if (response.status === 200) {
          toast.success("Created successfully!");
          window.location.reload(true);
        }else {
          toast.error("Error: Something went wrong.");
        }
      }  catch (error) {
        toast.warning('operation failed. . ');
        console.error("operation failed. . :", error);
    } finally {
        if (loadingToastId) {
            toast.dismiss(loadingToastId);
        }
    }
    },
  });

  const [showCuisineModal, setShowCuisineModal] = useState(false);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showDietModal, setShowDietModal] = useState(false);

  const toggleCuisineModal = () => setShowCuisineModal(!showCuisineModal);
  const toggleCourseModal = () => setShowCourseModal(!showCourseModal);
  const toggleDietModal = () => setShowDietModal(!showDietModal);

  const courseList = dropRecipeTypeList().course;
  const cuisineList = dropRecipeTypeList().cuisine;
  const dietList = dropRecipeTypeList().diet;

  return (
    <>
    <Toastify/>
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card p-4 mt-6" style={{ boxShadow: "10px 10px 5px gray " }}>
              <div className="d-flex justify-content-between">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="bi bi-egg-fill text-warning"></i>Kitchen Recipe <br />Management System
                </h6>
                <i onClick={closeModalButton} type="button" className="bi bi-x fs-1 text-danger"></i>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className="row">
                  {/* Recipe Name */}
                  <div className="col-md-6">
                    <div className="form-group mt-2">
                      <label htmlFor="name">Recipe Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        aria-describedby="nameHelp"
                        placeholder="Enter Recipe Name"
                        required
                      />
                      <small id="nameHelp" className="form-text text-muted mx-2">
                        {formik.errors.name && formik.touched.name ? <span className="text-danger">{formik.errors.name }</span> : "e.g., Spaghetti Carbonara"}
                      </small>
                    </div>
                  </div>

                  {/* Image URL */}
                  <div className="col-md-6">
                    <div className="form-group mt-2">
                      <label htmlFor="image_url">Image URL</label>
                      <input
                        type="text"
                        className="form-control"
                        id="image_url"
                        name="image_url"
                        value={formik.values.image_url}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        aria-describedby="imageUrlHelp"
                        placeholder="Enter Image URL"
                        required
                      />
                      <small id="imageUrlHelp" className="form-text text-muted mx-2">
                        {formik.errors.image_url && formik.touched.image_url ? <span className="text-danger">{formik.errors.image_url }</span>  : "e.g., https://example.com/image.jpg"}
                      </small>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="col-md-12">
                    <div className="form-group mt-2">
                      <label htmlFor="description">Recipe Description</label>
                      <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        aria-describedby="descriptionHelp"
                        placeholder="Enter Recipe Description"
                        required
                      ></textarea>
                      <small id="descriptionHelp" className="form-text text-muted mx-2">
                        {formik.errors.description && formik.touched.description ? <span className="text-danger">{formik.errors.description }</span> : "e.g., A classic Italian pasta dish"}
                      </small>
                    </div>
                  </div>

                  {/* Cuisine */}
                  <div className="col-md-6">
                    <div className="form-group mt-2">
                      <label htmlFor="cuisine">Cuisine</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          id="cuisine"
                          name="cuisine"
                          value={formik.values.cuisine}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          required
                          readOnly
                        />
                        <button className="btn btn-warning" type="button" onClick={toggleCuisineModal}>Select</button>
                      </div>
                      <small id="cuisineHelp" className="form-text text-muted mx-2">
                        {formik.errors.cuisine && formik.touched.cuisine ? <span className="text-danger">{formik.errors.cuisine }</span> : ""}
                      </small>
                    </div>
                  </div>

                  {/* Course */}
                  <div className="col-md-6">
                    <div className="form-group mt-2">
                      <label htmlFor="course">Course</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          id="course"
                          name="course"
                          value={formik.values.course}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          required
                          readOnly
                        />
                        <button className="btn btn-warning" type="button" onClick={toggleCourseModal}>Select</button>
                      </div>
                      <small id="courseHelp" className="form-text text-muted mx-2">
                        {formik.errors.course && formik.touched.course ? <span className="text-danger">{formik.errors.course }</span>  : ""}
                      </small>
                    </div>
                  </div>

                  {/* Diet */}
                  <div className="col-md-6">
                    <div className="form-group mt-2">
                      <label htmlFor="diet">Diet</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          id="diet"
                          name="diet"
                          value={formik.values.diet}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          required
                          readOnly
                        />
                        <button className="btn btn-warning" type="button" onClick={toggleDietModal}>Select</button>
                      </div>
                      <small id="dietHelp" className="form-text text-muted mx-2">
                        {formik.errors.diet && formik.touched.diet ? <span className="text-danger">{formik.errors.diet }</span> : ""}
                      </small>
                    </div>
                  </div>

                  {/* Preparation Time */}
                  <div className="col-md-6">
                    <div className="form-group mt-2">
                      <label htmlFor="prep_time">Preparation Time (minutes)</label>
                      <input
                        type="number"
                        className="form-control"
                        id="prep_time"
                        name="prep_time"
                        value={formik.values.prep_time}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        aria-describedby="prepTimeHelp"
                        placeholder="Enter Preparation Time"
                        required
                      />
                      <small id="prepTimeHelp" className="form-text text-muted mx-2">
                        {formik.errors.prep_time && formik.touched.prep_time ? <span className="text-danger">{formik.errors.prep_time }</span>: "e.g., 30"}
                      </small>
                    </div>
                  </div>

                  {/* Ingredients */}
                  <div className="col-md-12">
                    <div className="form-group mt-2">
                      <label htmlFor="ingredients">Ingredients (comma-separated)</label>
                      <textarea
                        className="form-control"
                        id="ingredients"
                        name="ingredients"
                        value={formik.values.ingredients}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        aria-describedby="ingredientsHelp"
                        placeholder="Enter Ingredients"
                        required
                      ></textarea>
                      <small id="ingredientsHelp" className="form-text text-muted mx-2">
                        {formik.errors.ingredients && formik.touched.ingredients ?  <span className="text-danger">{formik.errors.ingredients }</span>: "e.g., Pasta, Eggs, Bacon"}
                      </small>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="col-md-12">
                    <div className="form-group mt-2">
                      <label htmlFor="instructions">Instructions</label>
                      <textarea
                        className="form-control"
                        id="instructions"
                        name="instructions"
                        value={formik.values.instructions}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        aria-describedby="instructionsHelp"
                        placeholder="Enter Instructions"
                        required
                      ></textarea>
                      <small id="instructionsHelp" className="form-text text-muted mx-2">
                        {formik.errors.instructions && formik.touched.instructions ? <span className="text-danger">{formik.errors.instructions }</span>: "e.g., Cook the pasta according to package instructions..."}
                      </small>
                    </div>
                  </div>

                </div>

                {/* Submit Button */}
                <div className="d-flex justify-content-end mt-2">
                  <button type="submit" className="btn btn-warning m-2">
                    Add Recipe
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Cuisine Modal */}
      {showCuisineModal && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Select Cuisine
                </h1>
                <button onClick={toggleCuisineModal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <ul className="list-group">
                  {cuisineList.map((cuisine, index) => (
                    <li type="button" key={index} style={{ backgroundColor: "#fbf5aa" }} className="list-group-item text-center" onClick={() => {
                      formik.setFieldValue("cuisine", cuisine);
                      toggleCuisineModal();
                    }}>{cuisine}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Course Modal */}
      {showCourseModal && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">

              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Select Course
                </h1>
                <button onClick={toggleCourseModal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>


              <div className="modal-body">
                <ul className="list-group">
                  {courseList.map((course, index) => (
                    <li type="button" style={{ backgroundColor: "#fbf5aa" }} key={index} className="list-group-item text-center" onClick={() => {
                      formik.setFieldValue("course", course);
                      toggleCourseModal();
                    }}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Diet Modal */}
      {showDietModal && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Select Diet
                </h1>
                <button onClick={toggleDietModal} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <ul className="list-group">
                  {dietList.map((diet, index) => (
                    <li type="button" key={index} style={{ backgroundColor: "#fbf5aa" }} className="list-group-item text-center" onClick={() => {
                      formik.setFieldValue("diet", diet);
                      toggleDietModal();
                    }}>{diet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
}

export default CreateRecipe;
