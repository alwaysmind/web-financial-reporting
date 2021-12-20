import Cookies from "js-cookie";
import { Post } from "../helper";

export const getUserData = () => (
    JSON.parse(Cookies.get("gdata"))
)

export const setUserData = (payload) => (
    Cookies.set("gdata", JSON.stringify(payload))
)

export const setUserToken = (payload) => (
    Cookies.set("token", payload)
)

export const setLogin = async (payload) => {
    return await Post('auth/login', payload)
}