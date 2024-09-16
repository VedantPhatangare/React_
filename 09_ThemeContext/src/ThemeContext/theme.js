import { createContext, useContext } from "react";
const themeContext = createContext({
    theme:"light",
    setLight:()=>{},
    setDark:()=>{},
})

const ThemeProvider = themeContext.Provider
export default ThemeProvider 
export const useTheme = ()=>{
    return useContext(themeContext)
}