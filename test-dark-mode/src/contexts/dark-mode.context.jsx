//** Libraries */
import {
    createContext, useState
} from "react";

//** Initial data */
export const DarkModeContext = createContext({
    isDarkModeActive: false,
    setNewStatusDark: () => {},
});


//** General function */
export const DarkMode = ({ children }) => {
    const [isDarkModeActive, setIsDarkModeActive] = useState(false);
    console.log('%cdark-mode.context.jsx line:16 children', 'color: #007acc;', children);

    const setNewStatusDark = (isActive) => {
        setIsDarkModeActive(!isActive);
    }

    const value = {
        //** Data */
        isDarkModeActive,
        //** Functions */
        setNewStatusDark
    }

    return <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>
}