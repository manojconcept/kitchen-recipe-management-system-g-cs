import { useFormik } from "formik"
import * as yup from "yup"
import { Link, useNavigate } from "react-router-dom"
import { Toastify } from "../../components/HelperComponents/Helper"
import { toast } from "react-toastify"


import { isLoginUser } from "../../config/api/router/userApi"
import 'react-toastify/dist/ReactToastify.css';

const signInSchema = yup.object({
    username: yup.string().min(5, "Username must be at least five characters").required('Please fill in the username'),
    password: yup.string().min(5, "Password must be at least five characters").required("Please fill in the password"),
});

function Signin({ Footer }) {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },

        validationSchema: signInSchema,
        onSubmit: async (values) => {
            let loadingToastId; 
            try {
                loadingToastId = toast.loading('Logging in...');
                const response = await isLoginUser(values);
                if (response.status === 200) {
                    toast.success('Login successful!');
                    navigate("/");
                    window.location.reload(true);
                } else {
                    toast.error('An error occurred during login');
                    console.error("Login failed. Status code:", response.status);
                }
            } catch (error) {
                toast.warning('Login failed. Please check your credentials. ');
                console.error("Login failed. Please check your credentials. :", error);
            } finally {
                if (loadingToastId) {
                    toast.dismiss(loadingToastId);
                }
            }
        },
        
        
    })

    return (
        <>
         <Toastify /> 
            <div className="container mt-2">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5"> 
                        <div className="card p-4 mt-6" style={{ boxShadow: "10px 10px 5px gray " }}>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputUsername">@Username</label>
                                    <input type="text" className="form-control" id="username" name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} aria-describedby="usernameHelp" placeholder="Enter Username" required />
                                    <small id="usernameHelp" className="form-text text-muted mx-2">{
                                        formik.errors.username && formik.touched.username ? formik.errors.username : "eg:manojconcept"
                                    }</small>
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Password" aria-describedby="passwordHelp" required />
                                    <small id="passwordHelp" className="form-text text-muted mx-2"> 
                                        {
                                            formik.errors.password && formik.touched.password ? formik.errors.password : "password: 1234"
                                        }
                                    </small>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <p className="m-2">Don't have an account ? <Link to={"/signup"}>Signup</Link></p>
                                    <button type="submit" className="btn btn-warning m-2">Login</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            {Footer}

        </>
    )
}

export default Signin;