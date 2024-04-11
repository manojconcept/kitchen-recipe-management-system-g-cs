import { useState } from "react";

const Test = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <i type="button" className="bi bi-list-columns-reverse fs-1" onClick={handleShow}></i>

    <div className={`modal fade ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none', zIndex: 10000 }}>
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">

                 <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                    <i className="bi bi-egg-fill text-warning"></i>Kitchen Recipe <br />Management System's <span style={{color:"#cdaa35"}}>Golden List <br/></span>
                    </h1>
                    <button onClick={handleClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Description</h1>
                </div>
                <div className="modal-header">
                   <p style={{backgroundColor:"#fbf5aa",padding:"10px",borderRadius:"5px"}}>{}</p> 
                </div>

                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Ingredients</h1>
                </div>
                <div className="modal-header">
                   <p style={{backgroundColor:"#fbf5aa",padding:"10px",borderRadius:"5px"}}>{}</p> 
                </div>

                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Instructions</h1>
                </div>
                <div className="modal-header">
                   <p style={{backgroundColor:"#fbf5aa",padding:"10px",borderRadius:"5px"}}>{}</p> 

                </div>
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel"><i className="bi bi-stopwatch fs-6"></i> {} mins</h1>
                    <button onClick={handleClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
  )
};

export default Test;
