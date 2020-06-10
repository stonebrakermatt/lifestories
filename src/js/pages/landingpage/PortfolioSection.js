import React from 'react'
import PortfolioSubsection from './portfoliosection/PortfolioSubsection'

export default class PortfolioSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: 3
        }
        this.setDisplay.bind(this)
    }
    setDisplay(displayType) {
        this.setState({
            display: displayType
        })
    }
    render() {
        const navClass3 = this.state.display == 3 ? "portnav-selected" : ""
        const navClass0 = this.state.display == 0 ? "portnav-selected" : ""
        const navClass1 = this.state.display == 1 ? "portnav-selected" : ""
        const navClass2 = this.state.display == 2 ? "portnav-selected" : ""


        const portfolioSections = this.state.display == 3 ?
            [0, 1, 2].map(type =>
                <PortfolioSubsection key={type} display={type}/>
            )
        :   
            <PortfolioSubsection display={this.state.display}/>
        return (
            <section id="portfolio">
                <h1 className="section-title">Testimonials / Portfolio</h1>
                <nav id="portfolio-nav">
                    <a 
                        onClick={() => this.setDisplay(3)}
                        className={navClass3}
                    >Show All</a>
                    <a 
                        onClick={() => this.setDisplay(0)}
                        className={navClass0}
                    >Personal Memoirs</a>
                    <a 
                        onClick={() => this.setDisplay(1)}
                        className={navClass1}
                    >Company Histories</a>
                    <a
                        onClick={() => this.setDisplay(2)}
                        className={navClass2}
                    >Family Histories</a>
                </nav>
                {portfolioSections}
            </section>
        )
    }
}
