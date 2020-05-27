import React from 'react'
import App from './components/App'
import TitleBar from './components/TitleBar'

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
