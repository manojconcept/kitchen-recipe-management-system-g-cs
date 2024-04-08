import React, { useEffect } from "react";
import { GobalContext } from "../../contextApi/Datawrapper";
import { GetRecipeDatas } from "../../config/api/router/recipeApi";

import Grid from "../../components/Grid";

const Main = () => {
    const { captureData, setCaptureData } = GobalContext();

    useEffect(() => {
        GetRecipeDatas(setCaptureData, 1)
    }, [setCaptureData]);

    if (!captureData || !captureData.data) {
        return <h1>loading...</h1>
    }

    return (
        <>
            <Grid
                captureData={captureData}
            />
        </>

    );
}

export default Main;
