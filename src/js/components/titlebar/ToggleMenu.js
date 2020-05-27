import React from 'react'

export default class ToggleMenu extends React.Component {
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
            classString = "menu-open";
        } else if (this.state.overrideAnimation) {
            classString = "no-menu-animation";
        }

        return ( 
            <div 
                id="toggle-menu" 
                className={classString} 
                onClick={this.props.toggleMenu}
            >
                <div className="accordion top"></div>
                <div className="accordion middle"></div>
                <div className="accordion bottom"></div>
            </div>
        )
    }
}
