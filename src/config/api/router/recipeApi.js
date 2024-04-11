import {client} from '../client'


export const GetRecipeDatas = async (setCaptureData, limit=false) => {
    try {
        const response = await client.get(`/recipes?limit=${limit}`); 
        return setCaptureData(response.data);
    } catch (error) {
        throw error;
    }
};


export const GetScrollRecipeDatas = async (setItems, limit=1) => {
    try {
        const response = await client.get(`/recipes?limit=${limit}`);
        setItems((prev) => [...prev, ...response.data.data]);
    } catch (error) {
        console.error("Error fetching data:", error); 
        throw error;
    }
};