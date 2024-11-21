import axios from "axios";

export const key = "f6fb6aabc7338a290627f7fd1a529d4958172345";

const api = axios.create({
    baseURL:'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization':`Bearer ${key}`
    }
})

export default api;
