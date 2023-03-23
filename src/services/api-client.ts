import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '819f0ae26ca548f88128a0c3d26018af'
    }
})