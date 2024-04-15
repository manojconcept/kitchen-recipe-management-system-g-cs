import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Toastify } from "../../components/HelperComponents/Helper";
import { isSignupUser } from "../../config/api/router/userApi";
import 'react-toastify/dist/ReactToastify.css';


const signUpSchema = yup.object({
  firstName: yup.string().required('Please fill your first name'),
  lastName: yup.string().required('Please fill your last name'),
  username: yup.string().min(5, "Username must be at least five characters").required('Please fill the username'),
  password: yup
    .string()
    .min(8, "Password must be at least eight characters")
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#]).{8,}$/,
      "Password must contain at least one numeric digit, one uppercase and one lowercase letter, and one special character"
    )
    .required("Please fill the password"),
  confirmPassword: yup.string().min(8, "Password must be at least eight characters")
  .matches(
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#]).{8,}$/,
    "confirm Password must contain at least one numeric digit, one uppercase and one lowercase letter, and one special character"
  )
  .required("Please fill the confirm password"),
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
    onSubmit: async (values,{ resetForm }) => {
      if (values.password !== values.confirmPassword) {
        toast.warning("Password Doesn't Match.");
        return;
      }
      const userDataValue = {
        fname: values.firstName.trim(),
        lname: values.lastName.trim(),
        username: values.username.trim(),
        password: values.password.trim(),
      }
      let loadingToastId;
      try {
        // Call the signup API
        loadingToastId = toast.loading('signup in...');
        const response = await isSignupUser(userDataValue);
        if (response.status === 200) {
          toast.success("User created successfully!");
          resetForm();
        } else if (response.status === 409) {
          toast.error("User already exists.");
        } else {
          toast.error("Error: Something went wrong.");
        }
      } catch (error) {
        toast.warning('User already exists. . ');
        console.error("signup failed. . :", error);
    } finally {
        if (loadingToastId) {
            toast.dismiss(loadingToastId);
        }
    }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Toastify />
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
                      {formik.errors.firstName && formik.touched.firstName ? <span className="text-danger">{formik.errors.firstName }</span>: "e.g., John"}
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
                      {formik.errors.lastName && formik.touched.lastName ? <span className="text-danger">{formik.errors.lastName }</span> : "e.g., Doe"}
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
                    {formik.errors.username && formik.touched.username ? <span className="text-danger">{formik.errors.username }</span>: "e.g., manojconcept"}
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
                    {formik.errors.password && formik.touched.password ? <span className="text-danger">{formik.errors.password }</span> : "e.g., 1234"}
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
                    {formik.errors.confirmPassword && formik.touched.confirmPassword ? <span className="text-danger">{formik.errors.confirmPassword }</span>: "e.g., 1234"}
                  </small>
                </div>

                {/* Submit Button */}
                <div className="d-flex justify-content-between mt-2">
                  <p className="m-2">Already have an account ? <Link to={"/"}>Login</Link></p>
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
