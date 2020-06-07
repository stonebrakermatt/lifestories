import React from 'react'

import Home from './landingpage/Home'
import Portfolio from './landingpage/Portfolio'
import About from './landingpage/About'
import Contact from './landingpage/Contact'

export default class LandingPage extends React.Component {
    render() {
        return (
            <div id="app">
                <Home/>
                <Portfolio/>
                <About/>
                <Contact/>
            </div>
        )
    }
}
