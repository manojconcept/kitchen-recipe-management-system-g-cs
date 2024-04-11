import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";

const signUpSchema = yup.object({
  firstName: yup.string().required('Please fill your first name'),
  lastName: yup.string().required('Please fill your last name'),
  username: yup.string().max(12, "Maximum length is 12 characters").required('Please fill the username'),
  password: yup.string().max(4, "Maximum length is 4 characters").required("Please fill the password"),
  confirmPassword: yup.string().max(4, "Maximum length is 4 characters").required("Please fill the password"),
});

function Signup({ Footer }) {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      if (values.password !== values.confirmPassword) {
        console.log("Passwords do not match");
        return;
      }
      console.log(values);
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card p-4 mt-6" style={{ boxShadow: "10px 10px 5px gray " }}>
              <form onSubmit={formik.handleSubmit}>

                {/* First Name and Last Name */}
                <div className="d-flex gap-1">
                  <div className="form-group flex-grow-1 mr-2">
                    <label htmlFor="exampleInputFirstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      aria-describedby="firstNameHelp"
                      placeholder="Enter First Name"
                      required
                    />
                    <small id="firstNameHelp" className="form-text text-muted mx-2">
                      {formik.errors.firstName && formik.touched.firstName ? formik.errors.firstName : "e.g., John"}
                    </small>
                  </div>
                  <div className="form-group flex-grow-1 ml-2">
                    <label htmlFor="exampleInputLastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      aria-describedby="lastNameHelp"
                      placeholder="Enter Last Name"
                      required
                    />
                    <small id="lastNameHelp" className="form-text text-muted mx-2">
                      {formik.errors.lastName && formik.touched.lastName ? formik.errors.lastName : "e.g., Doe"}
                    </small>
                  </div>
                </div>

                {/* Username */}
                <div className="form-group mt-2">
                  <label htmlFor="exampleInputUsername">@Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    aria-describedby="usernameHelp"
                    placeholder="Enter Username"
                    required
                  />
                  <small id="usernameHelp" className="form-text text-muted mx-2">
                    {formik.errors.username && formik.touched.username ? formik.errors.username : "e.g., manojconcept"}
                  </small>
                </div>

                {/* Password */}
                <div className="form-group mt-2">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      id="password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Password"
                      aria-describedby="passwordHelp"
                      required
                    />
                    {formik.values.password && (
                      <div className="input-group-append">
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? "Hide" : "Show"}
                        </button>
                      </div>
                    )}
                  </div>
                  <small id="passwordHelp" className="form-text text-muted mx-2">
                    {formik.errors.password && formik.touched.password ? formik.errors.password : "e.g., 1234"}
                  </small>
                </div>

                {/* Confirm Password */}
                <div className="form-group mt-2">
                  <label htmlFor="exampleInputPassword1">Confirm Password</label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Confirm Password"
                      aria-describedby="confirmPasswordHelp"
                      required
                    />
                    {formik.values.confirmPassword && (
                      <div className="input-group-append">
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? "Hide" : "Show"}
                        </button>
                      </div>
                    )}
                  </div>
                  <small id="confirmPasswordHelp" className="form-text text-muted mx-2">
                    {formik.errors.confirmPassword && formik.touched.confirmPassword ? formik.errors.confirmPassword : "e.g., 1234"}
                  </small>
                </div>

                {/* Submit Button */}
                <div className="d-flex justify-content-between mt-2">
                  <p className="m-2">Already have an account ? <Link to={"/signin"}>Login</Link></p>
                  <button type="submit" className="btn btn-warning m-2">
                    Sign Up
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
      {Footer}
    </>
  );
}

export default Signup;
