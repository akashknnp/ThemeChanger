import React from 'react'
import NameContext from './CreateContext';
const Footer = () => {

    const { mode } = React.useContext(NameContext);
    return (
        <div className={mode}>
            <footer>
                <p>© 2025 Akash N N. All Rights Reserved</p>
            </footer>
        </div>
    )
}

export default Footer
