import {krmsClient} from '../client'

const GetRecipeDatas = async (setCaptureData, limit=false) => {
    try {
        const response = await krmsClient().get(`/recipes?limit=${limit}`); 
        return setCaptureData(response.data);
    } catch (error) {
        throw error;
    }
};


const GetScrollRecipeDatas = async (setItems, limit=1) => {
    try {
        const response = await krmsClient().get(`/recipes?limit=${limit}`);
        setItems((prev) => [...prev, ...response.data.data]);
    } catch (error) {
        throw error;
    }
};

const createRecipe = async (recipeData) =>{
    try {
        const response = await krmsClient().post(`/recipes`,recipeData);
        if (response.status === 200) {
            return response
        }
        return response;
    }catch(error){
        throw error;
    }
}

export {
    GetRecipeDatas,
    GetScrollRecipeDatas,
    createRecipe,
}