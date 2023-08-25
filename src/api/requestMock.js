import axios from "axios";

const requestsMock = axios.create({
    timeout: 5000
})

export default requestsMock;