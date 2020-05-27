import React from 'react'

import Nav from './menu/Nav'
import Social from './menu/Social'

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: this.props.menuOpen || false,
            overrideAnimation: true
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.menuOpen !== prevProps.menuOpen) {
            this.setState({
                menuOpen: this.props.menuOpen,
                overrideAnimation: false
            })
        }
    }
    render() {
        var classString = ""
        if (this.state.menuOpen) {
            classString = "menu-open"
        } else if (this.state.overrideAnimation) {
            classString = "no-menu-animation"
        }
        return (
            <div id="menu" className={classString}>
                <Nav/> 
                <Social/>
            </div>
        )
    }
}
