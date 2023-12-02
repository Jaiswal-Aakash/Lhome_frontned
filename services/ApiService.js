import axios from "axios";

const AxiosService = axios.create({
    baseURL : process.env.REACT_APP_API_URL,
    headers : {
        'Content-Type' : 'application/json'
    }
});

AxiosService.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

AxiosService.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

export { AxiosService };