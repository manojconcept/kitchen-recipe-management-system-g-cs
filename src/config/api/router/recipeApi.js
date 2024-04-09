import {client} from '../client'


export const GetRecipeDatas = async (setCaptureData, limit=false) => {
    try {
        const response = await client.get(`/recipes?limit=${limit}`); 
        return setCaptureData(response.data);
    } catch (error) {
        throw error;
    }
};

export const GetScrollRecipeDatas = async (setIndex, setHasMore, setItems, limit) => {
    try {
        const response = await client.get(`/recipes?limit=${limit}`);
        setItems((prev) => [...prev, ...response.data.data]);
        setHasMore(response.data.data.length > 0); 
        setIndex((prevIndex) => prevIndex + 1);
    } catch (error) {
        throw error;
    }
};
