import axios from "axios";

const baseURL = "http://localhost:3001/api/vi";

const instance = axios.create({
    baseURL,
    timeout:5000,
    headers:{
        "Content-Type": "application/json"
    },
    withCredentials:true
});

export default instance;