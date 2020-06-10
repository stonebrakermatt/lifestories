import React from 'react'
import PortfolioSubsection from './PortfolioSubsection'

export default class PortfolioSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: 3
        }
    }
    render() {
        const portfolioSections = [0, 1, 2].map(type =>
            <PortfolioSubsection key={type} display={type}/>
        )

        return (
            <section id="portfolio">
                <h1 className="section-title">Testimonials / Portfolio</h1>
                <nav id="portfolio-nav">
                    <a>Show All</a>
                    <a>Personal Memoirs</a>
                    <a>Company Histories</a>
                    <a>Family Histories</a>
                </nav>
                {portfolioSections}
            </section>
        )
    }
}
