import axios from "axios";

axios.interceptors.request.use((config) => {
    config.headers['Content-Type'] = 'application/ld+json'
    config.headers.Authorization = 'bearer ' + localStorage.getItem('accessToken')
    config.baseURL = import.meta.env.VITE_API_URL + '/api/'

    return config
})

export default axios