import React, { useState } from 'react';


const Card = ({ ele }) => {
    const [bookMark, setBookMark] = useState(false)
    // ---------------------------------------------------------> modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     handleClose();
    // };
    //------------------------------------------------------------> 

    const bookMarkHandle = (id) => {
        setBookMark(!bookMark)
        return (
            console.log(bookMark ? "" : id)
        )
    }

    return (
        <>
            <div className="card mx-auto mb-4 position-relative" style={{ width: "18rem", height: "100%" }}>
                <img className="card-img-top" src={ele.image_url} alt={ele.name} style={{ height: "200px", objectFit: "cover" }} />
                <span className="badge text-bg-warning position-absolute top-0 end-0 m-2"><i className="bi bi-stopwatch fs-6"> Prep Time : {ele.prep_time}</i> mins</span>
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{ele.name}</h5>
                    <p className="card-text mb-1">Course: {ele.course}</p>
                    <p className="card-text mb-1">Cuisine: {ele.cuisine}</p>
                    <p className="card-text mb-1">Diet: {ele.diet}</p>
                    <div className="d-flex justify-content-center gap-2">

                        <i onClick={() => bookMarkHandle(ele._id)} type="button" className={` bi bi-bookmark-check${bookMark ? "-fill text-warning" : ""} fs-1`}></i>
                        <>
                            <i type="button" className="bi bi-list-columns-reverse fs-1" onClick={handleShow}></i>

                            <div className={`modal fade ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none', zIndex: 10000 }}>
                                <div className="modal-dialog modal-dialog-centered" role="document">
                                    <div className="modal-content">
                                        {/* <div className="modal-header">
                                            <h1 style={{textAlign:"center"}} className="modal-title fs-5" id="exampleModalLabel">Read More</h1>
                                            <button onClick={handleClose} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div> */}
                                         <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                            <i className="bi bi-egg-fill text-warning"></i>Kitchen Recipe <br />Management System's <span style={{color:"#cdaa35"}}>Golden List <br/></span>
                                            </h1>
                                            <button onClick={handleClose} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>

                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Description</h1>
                                        </div>
                                        <div class="modal-header">
                                           <p style={{backgroundColor:"#fbf5aa",padding:"10px",borderRadius:"5px"}}>{ele.description}</p> 
                                        </div>

                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Ingredients</h1>
                                        </div>
                                        <div class="modal-header">
                                           <p style={{backgroundColor:"#fbf5aa",padding:"10px",borderRadius:"5px"}}>{ele.ingredients}</p> 
                                        </div>

                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Instructions</h1>
                                        </div>
                                        <div class="modal-header">
                                           <p style={{backgroundColor:"#fbf5aa",padding:"10px",borderRadius:"5px"}}>{ele.instructions}</p> 

                                        </div>
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel"><i className="bi bi-stopwatch fs-6"></i> {ele.prep_time} mins</h1>
                                            <button onClick={handleClose} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>




                                        {/* 
                                        <div className="modal-body">
                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                                </div>
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </form>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            {show && <div className="modal-backdrop fade show"></div>}
                        </>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
