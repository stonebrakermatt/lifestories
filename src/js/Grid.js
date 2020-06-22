import React from 'react'
import App from './App'
import TitleBar from './TitleBar'

export default class Grid extends React.Component {
    render() {
        return (
            <React.Fragment>
                <TitleBar/>
                <App/>
            </React.Fragment>
        )
    }
}
