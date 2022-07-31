import _ from "lodash"
import { useEffect, useState } from "react"
import { getStorage, setStorage } from "./Localstorage"

export const useTheme=()=>{
    const themes= getStorage("all-themes")
    const [theme,setTheme]=useState(themes.data.theme1)
    const [themeLoaded, setThemeLoaded] = useState(false)

    const setMode=mode=>{
        setStorage(mode,"theme")
        setTheme(mode)
    }

    useEffect(()=>{
        const localtheme= getStorage("theme")
        localtheme ? setTheme(localtheme) : setTheme(themes.data.theme1)
        setThemeLoaded(true)
    },[])

    return {theme, themeLoaded, setMode}
}