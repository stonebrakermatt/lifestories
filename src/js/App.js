import React from 'react'

import LandingPage from './pages/LandingPage'
import PortfolioPage from './pages/PortfolioPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

export default class App extends React.Component {
    render() {
        return (
            <div id="app">
                <LandingPage/>
                <PortfolioPage/>
                <AboutPage/>
                <ContactPage/>
            </div>
        )
    }
}
