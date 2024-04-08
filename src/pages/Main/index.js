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
        return <div className="card mx-auto mb-4 position-relative" style={{ width: "18rem", height: "100%" }}>
        <div className="skeleton-loading">
            {/* Placeholder for image */}
            <div className="skeleton-image"></div>
            {/* Placeholder for content */}
            <div className="skeleton-content">
                <div className="skeleton-title"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-text"></div>
                <div className="skeleton-text"></div>
            </div>
        </div>
    </div>;
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
