import React, { useEffect } from "react";
import { GobalContext } from "../../contextApi/Datawrapper";

import { GetRecipeDatas } from "../../config/api/router/recipeApi";

import style from "./style.module.css"

const Main = () => {
    const { captureData, setCaptureData} = GobalContext();

    useEffect(() => {
        GetRecipeDatas(setCaptureData,1)
    }, [setCaptureData]);
   
    if (!captureData || !captureData.data) {
        return <div>Loading...</div>; // or any other loading indicator
    }

    return (
        <div className={style.container}>
            hello
        </div>
    );
}

export default Main;
