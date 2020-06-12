import React from 'react'
import PortfolioData from './PortfolioData'
import PortfolioItem from './PortfolioItem'

export default class PortfolioSubsection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            condensed: true,
            data: PortfolioData.data,
        }
        this.toggleCondensed.bind(this)
    }
    toggleCondensed() {
        this.setState({
            condensed: !this.state.condensed
        })
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
        const filteredPortfolioItems = this.state.data
        .filter(item => item.type == this.props.display)
        .filter(item => item.hasOwnProperty('testimonial') && item.hasOwnProperty('testimonialBy'))
        .map(item =>
            <PortfolioItem
                type={item.type}
                imgpath={item.imgpath}
                key={item.imgpath}
                testimonial={item.testimonial}
                testimonialBy={item.testimonialBy}
            />
        )

        const subtitle = this.props.display == 0 ?
            "Personal Memoirs"
        :
            this.props.display == 1 ?
                "Company Histories"
            :
                "Error: Unknown Category"
        const subsectionClass = this.state.condensed ? "project-container condensed" : "project-container"
    
        const linkText = this.state.condensed ? "Show More" : "Show Less"
        const displayedPortfolioItems = this.state.condensed ? filteredPortfolioItems : portfolioItems

        return (
            <React.Fragment>
                <h2>{subtitle}</h2>
                <div className={subsectionClass}>
                    {displayedPortfolioItems}
                </div>
                <div className="showmorelessbtn">
                    <a onClick={() => this.toggleCondensed()}>{linkText}</a>
                </div>
            </React.Fragment>
        )
    }
}
