import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [state, setState] = useState({
        isAuth: false,
        token: null,
    })

    const loginUser = (token) => {
        setState({
            ...state,
            isAuth: true,
            token
        });
    };

    const logoutUser = () => {
        setState({
            ...state,
            isAuth: false,
            token: null,
        });
    };


    return (
        <AuthContext.Provider value={{ authState: state, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider