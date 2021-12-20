import axios from "axios"

export const setToken = (token) => {
    if (token) {
        axios.defaults.headers.common["x-access-token"] = token
        axios.defaults.headers.common["Content-Type"] = "application/json"
    } else {
        delete axios.defaults.headers.common["x-access-token"]
        axios.defaults.headers.common["Content-Type"] = "application/json"
    }
}