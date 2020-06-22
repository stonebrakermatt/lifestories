import React from 'react'

import HomeSection from './app/HomeSection'
import PortfolioSection from './app/PortfolioSection'
import AboutSection from './app/AboutSection'
import ContactSection from './app/ContactSection'

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollData: 0
        }
        this.handleScroll.bind(this)
    }
    handleScroll(event) {
        this.setState({
            scrollData: event.srcElement.scrollTop
        })
    }
    render() {
        return (
            <div id="app" onScroll={() => this.handleScroll(event)}>
                <HomeSection scrollData={this.state.scrollData}/>
                <PortfolioSection/>
                <AboutSection/>
                <ContactSection/>
            </div>
        )
    }
}
