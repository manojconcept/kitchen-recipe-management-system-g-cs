import axios from 'axios'

const ver = 'api/v1';
// const localHost = "http://localhost:7000"

//live
export const client = axios.create({
    baseURL: `https://b-kitchen-recipe-management-system.onrender.com/${ver}`,
    timeout: 0,
    headers: {}
  });


//local
  // export const client = axios.create({
  //   baseURL: `${localHost}/${ver}`,
  // });