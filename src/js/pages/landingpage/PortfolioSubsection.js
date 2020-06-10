import React from 'react'
import PortfolioData from './PortfolioData'
import PortfolioItem from './PortfolioItem'

export default class PortfolioSubsection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: PortfolioData.data,
        }
    }
    render() {
        const portfolioItems = this.state.data
            .filter(item => item.type == this.props.display)
            .map(item =>
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
        
        const subtitle = this.props.display == 0 ?
            "Personal Memoirs"
        :
            this.props.display == 1 ?
                "Company Histories"
            :
                this.props.display == 2 ?
                    "Family Histories"
                :
                    "Error: Unknown Category"
        return (
            <React.Fragment>
                <h2>{subtitle}</h2>
                <div className="project-container">
                    {portfolioItems}
                </div>
            </React.Fragment>
        )
    }
}
