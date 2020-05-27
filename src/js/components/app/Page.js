import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './page/HomePage'
import About from './page/About'
import Resume from './page/Resume'

export default class Page extends React.Component {
    render() {
        return (
            <div id="page">
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/resume">
                        <Resume/>
                    </Route>
                </Switch>
            </div>
        )
    }
}
