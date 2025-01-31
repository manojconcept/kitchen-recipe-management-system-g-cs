import { krmsClient } from "../client";

const isLoginUser = async (userData,setLogin) => {
    try {
        const response = await krmsClient().post(`user/login`, userData);
        if (response.status === 200) {
            sessionStorage.setItem('jwtToken', JSON.stringify(response.data));
            setLogin(prev=>({...prev,login:true}));
            return response
        }
        return response;
    } catch (error) {
        throw error;
    }
};


const isSignupUser = async (userData) => {
    try {
        const response = await krmsClient().post(`user/register`, userData);
        if (response.status === 200) {
            return response
        }
        return response;
    } catch (error) {
        throw error;
    }
};


export {
    isLoginUser,
    isSignupUser
};