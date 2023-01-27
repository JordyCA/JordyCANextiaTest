//** Libraries */
import {
    createContext,
    useState
} from 'react'

//** General data */
export const UserContext = createContext({
    userToken: null,
    setUserToken: () => {},
});

export const UserProvider = ({children}) => {
    const [userToken, setUserToken] = useState(null);

    const value = {
        //** Data */
        userToken,
        //** Functions */,
        setUserToken
    }
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}