import { useFormik } from "formik"
import * as yup from "yup"
import { Link } from "react-router-dom"
// import { GobalContext } from "../../contextApi/Datawrapper"
import { isLoginUser } from "../../config/api/router/userApi"

const signInSchema = yup.object({
    username: yup.string().min(5, "Username must be at least five characters").required('Please fill in the username'),
    password: yup.string().min(5, "Password must be at least five characters").required("Please fill in the password"),
});

function Signin({Footer}) {
    //  const {storeTokenInSessionStorage} = GobalContext();

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: signInSchema,
        onSubmit: (values) => {
            console.log(values)
            isLoginUser(values);
        }
    })

    return (
        <>
            <div className="container mt-2">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5"> {/* Adjust column size based on your preference */}
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
                                    <small id="passwordHelp" className="form-text text-muted mx-2"> {/* Fixed typo in the id */}
                                        {
                                            formik.errors.password && formik.touched.password ? formik.errors.password : "password: 1234"
                                        }
                                    </small>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    {/* <button type="submit" className="btn btn-dark m-2">Login ll</button> */}
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