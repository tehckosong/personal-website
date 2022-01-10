import React , {useState,useContext}  from 'react'

import { themes } from '../utils/Theme'
const ThemeToggleContext = React.createContext()

export function useThemeToggler(){
    return useContext(ThemeToggleContext)
}

export function ThemeTogglerProvider({children}) {

    const [dark , setDark] = useState(true)

    const Toggle = () => {
        setDark(!dark) //default === dark
    }

    const theme = dark ? themes.dark : themes.light
    const value = {
        Toggle,
        theme,
        dark,
    }

    return <ThemeToggleContext.Provider value={value}>
        {children}
    </ThemeToggleContext.Provider>
}