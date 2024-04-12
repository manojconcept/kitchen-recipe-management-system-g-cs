import { krmsClient } from "../client";


const isLoginUser = async (userData) => {
    try {
        const response = await krmsClient().post(`user/login`, userData);
        console.log(response);  
        if (response.status === 200) {
            return sessionStorage.setItem('jwtToken', JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        throw error;
    }
};



export { isLoginUser };