import React from 'react'
import PortfolioData from './PortfolioData'
import PortfolioItem from './PortfolioItem'

export default class PortfolioSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: PortfolioData.data,
            display: 3
        }
    }
    render() {
        const portfolioItems = this.state.data.map(item =>
            item.hasOwnProperty('testimonial') && item.hasOwnProperty('testimonialBy') ?
                <PortfolioItem
                    display={this.state.display}
                    type={item.type}
                    imgpath={item.imgpath}
                    key={item.imgpath}
                    testimonial={item.testimonial}
                    testimonialBy={item.testimonialBy}
                />
            :
                <PortfolioItem
                    display={this.state.display}
                    type={item.type}
                    imgpath={item.imgpath}
                    key={item.imgpath}
                />
        )

        return (
            <section id="portfolio">

                <h1 class="section-title">Testimonials / Portfolio</h1>
                <nav id="portfolio-nav">
                    <a>Show All</a>
                    <a>Personal Memoirs</a>
                    <a>Company Histories</a>
                    <a>Family Histories</a>
                </nav>
                    <div className="project-container">
                    {portfolioItems}
                </div>
            </section>
        )
    }
}
