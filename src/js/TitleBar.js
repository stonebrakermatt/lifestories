import React from 'react'

export default class TitleBar extends React.Component {
    render() {
        return (
            <div id="titlebar">
                <div id="logo-container">
                    <img id="logo-img" src="/images/ls1500.png"/>
                    <div id="logo-contact">
                        <p id="logo-phone">214-288-2262</p>
                        <p id="logo-email">chad@lifestories.com</p>
                    </div>
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
