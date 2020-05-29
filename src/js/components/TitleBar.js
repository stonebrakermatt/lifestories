import React from 'react'

export default class TitleBar extends React.Component {
    render() {
        return (
            <div id="titlebar">
                <div id="logo-container">
                    <img id="logo-img" src="/images/ls1500.png"/>
                    <p id="logo-contact">
                        214-288-2262
                    </p>
                    <p id="logo-smallscreen-err">
                        Device too small to load webpage
                    </p>
                </div>
                <nav id="nav">
                    <a>Portfolio</a>
                    <a>About Us</a>
                    <a>Contact</a>
                </nav>
            </div>  
        )
    }
}
