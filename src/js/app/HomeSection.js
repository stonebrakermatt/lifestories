import React from 'react'

export default class HomeSection extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        var opacity = 0.33 + this.props.scrollData / document.body.clientHeight / 2
        var homeTxtTop = this.props.scrollData / 3
        return (
            <section id="home">
                <div id="home-gradient" style={{backgroundColor: `rgba(0,0,0,${opacity})`}}>
                    <div 
                        id="home-txt" 
                        style={{position: 'relative', top: `calc(25% + ${homeTxtTop}px)`}}
                    >
                        <h1>LifeStories</h1>
                        <h2>Capturing Your Legacy</h2> 
                        <div id="viewportfolio">
                            <a id="viewportfoliobtn" href="#portfolio">
                                View Portfolio
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
