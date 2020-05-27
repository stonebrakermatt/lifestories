import React from 'react'
import { Route, Switch } from 'react-router-dom'

import LoginButton from './account/LoginButton'
import LogoutButton from './account/LogoutButton'
import RegisterButton from './account/RegisterButton'
import UserInfo from './account/UserInfo'

export default class Account extends React.Component {
    render() {
        return (
            <div id="account">
                <Switch>
                    <Route path="/example">
                        <LoginButton/>
                        <RegisterButton/>
                    </Route>
                    <Route path="/">
                        <UserInfo/>
                        <LogoutButton/>
                    </Route>
                </Switch>
            </div>
        )
    }
}
