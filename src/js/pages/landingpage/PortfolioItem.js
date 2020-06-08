import React from 'react'

export default class PortfolioItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const imgsrc = "images/portfolio/" + this.props.imgpath
        return (
            this.props.testimonial && this.props.testimonialBy ?
                <div className="project">
                    <img className="projectimg" src={imgsrc}/>
                    <div className="testimonial-container">
                        <p className="testimonial">{this.props.testimonial}</p> 
                        <p className="testimonial-client">-{this.props.testimonialBy}</p>
                    </div>
                </div>
            :
                <div className="project">
                    <img className="projectimg" src={imgsrc}/>
                </div>
        )
    }
}
