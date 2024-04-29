import {useContext, createContext, createElement, useState, useEffect} from 'react'



const AuthContext = createContext({
    isAuthenticated:false,
});

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <div>
            <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>
        </div>
    );
};

export const useAuth = () => useContext(AuthContext);
