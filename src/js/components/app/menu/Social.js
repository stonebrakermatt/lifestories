import React from 'react'

export default class Social extends React.Component {
    render() {
        return (
            <nav className="social">
                <a href="mailto:stonebrakermatt@gmail.com">
                    <img src="images/email.png"/>
                </a>
                <a href="https://github.com/stonebrakermatt">
                    <img src="images/github.png"/> 
                </a>
                <a href="https://github.com/stonebrakermatt">
                    <img src="images/twitter.png"/>
                </a>
            </nav>
        )
    }
}
