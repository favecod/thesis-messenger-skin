import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Routes
import Home from './Home'
import Login from './Login'
import Join from './Join'
import Users from './Users'
import Dashboard from './Dashboard'

const Routes = () => {
    return (
        <Switch>
            <>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/join' component={Join} />
                <Route exact path='/users/:username'
                    render={props => <Users key={props.match.params.username} {...props} />}
                />
                <Route exact path='/dashboard'
                    render={props => <Dashboard {...props} />}
                />
            </>
        </Switch>
    )
}

export default Routes