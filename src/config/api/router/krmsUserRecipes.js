import { krmsClient } from "../client";

const postKrmsUserRecipes = async (setKrmsUserRecipes) => {
    try {
        const value = {username:JSON.parse(sessionStorage.getItem('jwtToken')).userData.username}
        const response = await krmsClient().post(`/inventory`, value);
        if (response.status === 200) {
            setKrmsUserRecipes(response.data)
            return response
        }
        return response;
    } catch (error) {
        throw error;
    }
};

const updatePostKrmsUserRecipes = async (id,updatedValue) => {
    try { 
        const response = await krmsClient().put(`/inventory/${id}`, updatedValue);
        if (response.status === 200) {
            return response
        }
        return response;
    } catch (error) {
        throw error;
    }
};


const deletePostKrmsUserRecipes = async (id, deleteUserData) => {
    try { 
        const response = await krmsClient().delete(`/inventory/${id}`, { data: deleteUserData }); //only on delete have to passdata { data: deleteUserData }
        if (response.status === 200) {
            return response;
        }
        return response;
    } catch (error) {
        throw error;
    }
}



export {
    postKrmsUserRecipes,
    updatePostKrmsUserRecipes,
    deletePostKrmsUserRecipes
}