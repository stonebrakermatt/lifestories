import React from 'react'

import HomeSection from './landingpage/HomeSection'
import PortfolioSection from './landingpage/PortfolioSection'
import AboutSection from './landingpage/AboutSection'
import ContactSection from './landingpage/ContactSection'

export default class LandingPage extends React.Component {
    render() {
        return (
            <div id="app">
                <HomeSection/>
                <PortfolioSection/>
                <AboutSection/>
                <ContactSection/>
            </div>
        )
    }
}
