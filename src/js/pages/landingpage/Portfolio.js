import React from 'react'
import PortfolioData from './PortfolioData'
import PortfolioItem from './PortfolioItem'

export default class Portfolio2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: PortfolioData.data,
        }
    }
    render() { 
        const portfolioItems = this.state.data.map(item => 
            item.hasOwnProperty('testimonial') && item.hasOwnProperty('testimonialBy') ?
                <PortfolioItem
                    type={item.type} 
                    imgpath={item.imgpath}
                    key={item.imgpath} 
                    testimonial={item.testimonial}
                    testimonialBy={item.testimonialBy}
                />
            :
                <PortfolioItem
                    type={item.type}
                    imgpath={item.imgpath}
                    key={item.imgpath}
                />
        )

        return (
            <section id="portfolio">

                <h1>Portfolio</h1>
                <div className="project-container">
                    {portfolioItems}
                </div>
            </section>
        )
    }
}
