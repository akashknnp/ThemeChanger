import React from 'react'
import Navigation from './Navigation'
import Content from './Content'
import Footer from './Footer'
import "./Translate.css"
import { useState } from 'react'
import NameContext from './CreateContext';

const Translate = () => {


    const [mode, setMode] = useState("light");


    return (
        <div>
            <NameContext.Provider value={{ mode, setMode }}>
                <Navigation />
                <Content />
                <Footer />
            </NameContext.Provider>

        </div>
    )
}

export default Translate
