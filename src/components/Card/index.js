import React from 'react';

const Card = ({ ele }) => {
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
                        <div onClick={() => {}} style={{ cursor: "pointer" }}>
                            <i className="bi bi-bookmark-check fs-1"></i>
                        </div>
                        <div onClick={() => {  }} style={{ cursor: "pointer" }}>
                            <i className="bi text-warning bi-bookmark-check-fill fs-1"></i>
                        </div>
                        <div onClick={() => {}} style={{ cursor: "pointer" }}>
                            <i className="bi bi-search fs-1"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
