import React, { useEffect } from "react";
import { GobalContext } from "../../contextApi/Datawrapper";
import { GetRecipeDatas } from "../../config/api/router/recipeApi";

import Grid from "../../components/Grid";
import Skeleton from "../../components/Loading/Cardskeleton";

const Main = () => {
    const { captureData, setCaptureData } = GobalContext();

    useEffect(() => {
        GetRecipeDatas(setCaptureData, 1)
    }, [setCaptureData]);

    if (!captureData || !captureData.data) {
        return <Skeleton/>
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
