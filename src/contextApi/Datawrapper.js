import React, { useContext, createContext, useState} from "react";

const flowData = createContext();
const ContextWrapper = ({ children }) => {
    const [captureData, setCaptureData] = useState([]);
    const [krmsUserRecipes, setKrmsUserRecipes] = useState([]);
    const [login,setLogin] = useState(
        {
            login:false,
            signup:false
        }
    )
    
    const helperData = {
        captureData,
        setCaptureData,
        setKrmsUserRecipes,
        krmsUserRecipes,
        login,
        setLogin
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