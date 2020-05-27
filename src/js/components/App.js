import React from 'react'

import Menu from './app/Menu'
import Page from './app/Page'

export default class App extends React.Component {    
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="app">
                <Page menuOpen={this.props.menuOpen}/>
                <Menu menuOpen={this.props.menuOpen}/>
            </div>
        )
    }
}
