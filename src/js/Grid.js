import React from 'react'
import Admin from './components/Admin'
import App from './components/App'
import TitleBar from './components/TitleBar'

export default class Grid extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            menuOpen: false
        }
        this.toggleMenu = this.toggleMenu.bind(this)
    }
    toggleMenu() { 
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }
    render() {
        return (
            <React.Fragment>
                <TitleBar 
                    menuOpen={this.state.menuOpen}
                    toggleMenu={this.toggleMenu}
                />
                <App
                    menuOpen={this.state.menuOpen}
                />
            </React.Fragment>
        )
    }
}
