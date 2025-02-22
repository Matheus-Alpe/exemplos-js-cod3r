import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

const Routes = props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users' component={UserCrud} />
        <Redirect from='*' to='/' />
    </Switch>

export default Routes
