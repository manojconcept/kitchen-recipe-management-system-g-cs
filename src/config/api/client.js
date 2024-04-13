import axios from 'axios';
const ver = 'api/v1';

// //local
// //   export const client = krmsClienLocalt();
// function krmsClient() {
//   return axios.create({
//     baseURL: `http://localhost:7000/${ver}`,
//     timeout: 0,
//     headers: {
//       // Authorization: `Bearer ${accessToken}`,
//     }
//   });
// }

function krmsClient(timeout) {
  let headers = {};
  const storedToken = sessionStorage.getItem('jwtToken');
  if (storedToken) {
    headers.Authorization = JSON.parse(storedToken).token;
  }

  return axios.create({
    baseURL: `https://b-kitchen-recipe-management-system.onrender.com/${ver}`,
    timeout: timeout,
    headers: headers
  });
}


export {krmsClient};