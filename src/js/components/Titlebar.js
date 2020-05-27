import React from 'react'
import { Link } from 'react-router-dom';

import ToggleMenu from './titlebar/ToggleMenu'
import Title from './titlebar/Title'

export default class TitleBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="titlebar">
                <ToggleMenu 
                    menuOpen={this.props.menuOpen}        
                    toggleMenu={this.props.toggleMenu}
                />
                <Title/>
            </div>
        )
    }
}
