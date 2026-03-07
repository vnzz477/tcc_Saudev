
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tcc-saudev.onrender.com/',
    headers:{
        "x-access-token": localStorage.getItem("token") || ""
    }
});

export default api;