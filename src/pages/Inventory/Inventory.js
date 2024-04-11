import { useState } from "react";
import CreateRecipe from "./CreateRecipe";

const Inventory = ({ Footer }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

     const handleSubmit = (event) => {
        event.preventDefault();
        handleClose();
    };
    return (
        <>
            <div className="container">
                <div className="row">

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div className="col-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <svg type="button" onClick={handleShow} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#ffc107" class="bi bi-plus-square" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                    </svg>
                                    {/* modal-start */}
                                    <div className={`modal fade ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none', zIndex: 10000 }}>
                                        <CreateRecipe
                                            closeModalButton={handleClose}
                                            submitModalButton={handleClose}
                                        />
                                    </div>
                                    {show && <div className="modal-backdrop fade show"></div>}
                                    {/* modal -end */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {Footer}

        </>

    )
}

export default Inventory