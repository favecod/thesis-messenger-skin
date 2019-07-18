import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Admin from './admin'
import Client from './client'

const App = () => {
    return(
        <Switch>
            <>
                <Route path='/' component={Client}/>
                <Route path='/admin' component={Admin}/>
            </>
        </Switch>
    )
}

export default App