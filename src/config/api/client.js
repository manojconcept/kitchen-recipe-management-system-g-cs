import axios from 'axios'

const ver = 'api/v1';

//live
export const client = axios.create({
    baseURL: `https://b-kitchen-recipe-management-system.onrender.com/${ver}`,
    timeout: 0,
    headers: {}
  });


//local
//   export const client = newFunction();
// function newFunction() {
//   return axios.create({
//     baseURL: `http://localhost:7000/${ver}`,
//     timeout: 0,
//     headers: {
//       // Authorization: `Bearer ${accessToken}`,
//     }
//   });
// }
