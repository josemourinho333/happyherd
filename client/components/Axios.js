import Axios from 'axios';

const axios = Axios.create({
  baseURL: process.env.happyHerdBaseURL,
  auth: {
    username: process.env.username,
    password: process.env.applicationPassword
  }
});

export default axios;