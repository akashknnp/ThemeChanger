import React from 'react'

import NameContext from './CreateContext'
import { useContext } from 'react';
const Navigation = () => {


    const { mode, setMode } = useContext(NameContext)

    const ThemeChanger = () => {
        if (mode === "light") {
            setMode("dark")
        } else {
            setMode("light")
        }
    }
    return (
        <div className={mode}>
            <nav>
                <h2>AchieversIT</h2>
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                </ul>
                <button onClick={ThemeChanger}>Switch Theme</button>
            </nav>
        </div>
    )
}

export default Navigation
