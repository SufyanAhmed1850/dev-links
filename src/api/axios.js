import axios from "axios";
import Cookies from "js-cookie";
const BASE_URL = "http://localhost:5050";

const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

axiosPrivate.interceptors.request.use((config) => {
    const token = Cookies.get("jwt");
    console.log(token);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export { axiosPrivate };
