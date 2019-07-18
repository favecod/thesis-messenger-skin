import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Routes
import Home from './Home'
import Login from './Login'
import Register from './Register'

const Routes = () => {
    return(
        <Switch>    
            <>
                <Route exact path='/' component={Home}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/register' component={Register}/>
            </>
        </Switch>
    )
}

export default Routes