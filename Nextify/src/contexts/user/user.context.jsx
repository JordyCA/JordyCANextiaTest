//** Libraries */
import {
    createContext,
    useState,
} from "react";
import React from "react";

//** General Values */
export const UserContext = createContext({
    tokenUser: null,
    setTokenUser: () => {},
});

export const UserProvider = ({ children }) => {
    const [tokenUser, setTokenUser] = useState(null);

    const addToken = (token = null) => {
        setTokenUser(token);
    }

    const value = {
        //** Data */
        tokenUser,
        //** Functions */
        addToken
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

// const UserContext = React.createContext({});

// export const UserProvider = User
