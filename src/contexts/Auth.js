// import Cookies from "js-cookie";
// import { createContext } from "react";

import Cookies from "js-cookie";
import { Post } from "../helper";

// export const AuthContext = createContext()

// export const AuthProvider = (props) => {
//     // Get User Data
    
//     const getUserData = () => (JSON.parse(Cookies.get("gdata")));

//     const setUserData = (data) => (Cookies.set("gdata", JSON.stringify(data)));

//     return (
//         <AuthContext.Provider value={{
//             getUserData,
//             setUserData
//         }}>
//             { props.children }
//         </AuthContext.Provider>
//     )
// }

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