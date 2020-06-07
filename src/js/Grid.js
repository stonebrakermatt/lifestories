import React from 'react'
import LandingPage from './pages/LandingPage'
import TitleBar from './TitleBar'

export default class Grid extends React.Component {
    render() {
        return (
            <React.Fragment>
                <TitleBar/>
                <LandingPage/>
            </React.Fragment>
        )
    }
}
