import React from 'react';
import {createContext,useContext,useState} from 'react';
import axios from 'axios';

const AuthContext = createContext();
const API_LOGIN_URL = "http://adityanjothir.pythonanywhere.com/api/token/";
const API_REFRESH_URL = "http://adityanjothir.pythonanywhere.com/api/token/refresh";
export const AuthProvider = ({children}) => {
    const [accessToken,setaccessToken] = useState("");
    const [refreshToken,setrefreshToken] = useState("");

    const authLogin = (user,pass) => {
        axios
            .post(API_LOGIN_URL,{
                username: user,
                password: pass
            }).then(response => {
                if (response.data && response.data.access){
                    setaccessToken(response.data.access);
                    setrefreshToken(response.data.refresh)
                    console.log(JSON.parse(response.data))
                }
            })
    }

    const getNewAccess = (refreshToken) => {
        axios
            .post(API_REFRESH_URL,{
                refresh: refreshToken
            })
            .then(response => {
                if(response.data && response.data.access){
                    console.log(JSON.parse(response.data))
                }
            })
    }
    
    return (
        <AuthContext.Provider value={{authLogin,accessToken,refreshToken}}>
            {children}
        </AuthContext.Provider>
    )
    
    
};
export default AuthContext;
