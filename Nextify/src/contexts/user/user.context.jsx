//** Libraries */
import {
    createContext,
    useState,
} from "react";
import React from "react";

//** General Values */
export const UserContext = createContext({
    //** Data */
    tokenUser: null,
    userData: {},
    //** Functions  */
    setTokenUser: () => {},
    setUserData: () => {},
});

export const UserProvider = ({ children }) => {
    const [tokenUser, setTokenUser] = useState(null);
    const [userData, setUserData] = useState({});

    const addToken = (token = null) => {
        setTokenUser(token);
    }

    const addUserData = (data) => {
        setUserData(data);
    }

    const value = {
        //** Data */
        tokenUser,
        userData,
        //** Functions */
        addToken,
        addUserData,
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

// const UserContext = React.createContext({});

// export const UserProvider = User
