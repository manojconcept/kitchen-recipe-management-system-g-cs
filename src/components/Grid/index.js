import React from 'react';
import style from "./style.module.css";
import Card from "../Card";

const Grid = ({ captureData, isLoading }) => {
    let skeleton = null;
    return (
        <div className={style.cards__frame}>
             {skeleton}
            {captureData.map((ele,index) => (
                <div key={index} className={style.card__inside}>
                    <Card ele={ele} key={ele._id} />
                </div>
            ))}
        </div>
    );
}

export default Grid;
