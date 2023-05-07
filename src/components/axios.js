import axios from 'axios'

const instance = axios.create({
    baseURL: "https://webapi-project-backend-mcknijak-try2.onrender.com"
})

export default instance
