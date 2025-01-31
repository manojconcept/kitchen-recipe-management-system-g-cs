import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GobalContext } from '../../contextApi/Datawrapper';

const Navbar = () => {
    const navigation = useNavigate();
    const {login,setLogin} = GobalContext();

    console.log(login);
    const handleSignin = () => {
        if (sessionStorage.getItem('jwtToken')) {
            sessionStorage.removeItem('jwtToken');
            setLogin(prev=>({...prev,login:false}));
            if(!login){
                navigation('/');
            }
        } else {
            setLogin(prev=>({...prev,login:false}));
            if(!login){
                navigation('/');
            }

        }
    }

    useEffect(() => {
        const handleStorageChange = () => {
            if (!sessionStorage.getItem('jwtToken')) {
                navigation("/");
            }
        };
        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [navigation]);

    return (
        <nav style={{ position: "sticky", top: "0", zIndex: "9000" }} className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to={"/"} style={{ cursor: "pointer" }} className="navbar-brand" href="#"><i className="bi bi-egg-fill text-warning text-uppercase fw-bold"></i>Kitchen Recipe <br />Management System</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/inventory"}><i className="bi bi-stack text-warning"></i> Inventory</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/datavisualization"}><i className="bi bi-pie-chart-fill text-warning"></i> Recipe Data Visualization </Link>
                        </li>
                    </ul>
                    <div className="d-flex" >
                        <i onClick={handleSignin} className="bi bi-box-arrow-in-right fs-1 m-2" type="button"></i>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
