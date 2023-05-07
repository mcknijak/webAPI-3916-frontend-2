import axios from 'axios'

const instance = axios.create({
    baseURL: "https://github.com/mcknijak/webAPI-3916-backend-2"
})

export default instance
