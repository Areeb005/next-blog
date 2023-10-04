'use client'

import { useEffect, useMemo, useState } from "react"
import { FiSun, FiMoon } from "react-icons/fi"

const DarkmodeSwitch = () => {

    const [storedTheme, setstoredTheme] = useState(null)

    const setDark = () => {
        // 2
        localStorage.setItem("theme", "dark");
        setstoredTheme("dark")

        // 3
        document.documentElement.setAttribute("data-theme", "dark");
    };

    const setLight = () => {
        localStorage.setItem("theme", "light");
        setstoredTheme("light")
        document.documentElement.setAttribute("data-theme", "light");
    };


    const toggleTheme = (e) => {
        if (storedTheme !== "dark") {
            setDark();
            // console.log("storedTheme", storedTheme);
        } else {
            setLight();
            // console.log(storedTheme);
        }
    };


    useEffect(() => {

        const __storedTheme = localStorage.getItem("theme");
        setstoredTheme(__storedTheme)
        const prefersDark = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
        const defaultDark = (__storedTheme === "dark" || (__storedTheme === null && prefersDark));
        if (defaultDark) setDark();

        console.log(__storedTheme);
        
    }, [])


    return <>
        <a onClick={() => toggleTheme()} className="text-color2 icon-hover cursor-pointer">
            {
                storedTheme !== 'dark' ? <FiMoon /> : <FiSun />
            }
        </a>
    </>
}

export default DarkmodeSwitch