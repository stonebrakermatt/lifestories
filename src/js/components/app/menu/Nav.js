import React from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends React.Component {
    render() {
        return (
            <nav id="nav">
                <div className="nav-row">
                    <div className="right-arrow-indicator"></div>
                    <div className="nav-item">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="left-arrow-indicator"></div>
                </div>
                <div className="nav-row">
                    <div className="right-arrow-indicator"></div>
                    <div className="nav-item">
                        <Link to="/about">About</Link>
                    </div>
                    <div className="left-arrow-indicator"></div>
                </div>
                <div className="nav-row">
                    <div className="right-arrow-indicator"></div>
                    <div className="nav-item">
                        <a href="/documents/cv.pdf">Resume</a>
                    </div>
                    <div className="left-arrow-indicator"></div>
                </div>
            </nav>
        )
    }
}
