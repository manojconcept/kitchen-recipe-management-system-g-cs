import {client} from '../client'


export const GetRecipeDatas = async (setCaptureData, limit=false) => {
    try {
        const response = await client.get(`/recipes?limit=${limit}`); 
        return setCaptureData(response.data);
    } catch (error) {
        throw error;
    }
};
