import React from 'react'
import NameContext from './CreateContext';
const Content = () => {

    const { mode } = React.useContext(NameContext);
    return (
        <div className={mode}>
            <main>
                <h1>Welcome to the Theme Switcher App!</h1>
                <p>This is the content area.</p>
            </main>
        </div>
    )
}

export default Content
