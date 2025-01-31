import { Outlet } from "react-router-dom";
import { GobalContext } from "../contextApi/Datawrapper";
import Signin from "../pages/Log/Signin";
import Navbar from "../components/Navbar";
import ThirdBar from "../components/Navbar/ThirdBar";
import Footer from "../components/Footer";

export default function MainLayout() {
    const { login,setLogin } = GobalContext();
    return (
        <div>
            {
                sessionStorage.getItem('jwtToken') ? <Navbar  /> : <ThirdBar />
            }
            {
                sessionStorage.getItem('jwtToken') ? <Outlet /> : <Signin Footer={<Footer />}/>
            }
            
        </div>
    )
}