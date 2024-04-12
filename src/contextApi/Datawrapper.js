import React, { useContext, createContext, useState} from "react";



const flowData = createContext();
const ContextWrapper = ({ children }) => {
    const [captureData, setCaptureData] = useState([])

    // const storeTokenInSessionStorage = (token) => sessionStorage.setItem('jwtToken', token);
    // const getTokenFromSessionStorage = () => sessionStorage.getItem('jwtToken');
    // const removeTokenFromSessionStorage = () => sessionStorage.removeItem('jwtToken');

    const helperData = {
        captureData,
        setCaptureData,
    }


    return (
        <flowData.Provider value={helperData}>
            {children}
        </flowData.Provider>

    )
}

export const GobalContext = () => {
    return useContext(flowData);
}


export default ContextWrapper;