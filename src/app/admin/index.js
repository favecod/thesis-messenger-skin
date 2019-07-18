import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

class Admin extends Component {
    render() {
        return(
            <Switch>
                <Fragment>
                    <Route exact path='/admin' component={() => <div>admin route</div>}/>
                    <Route exact path='/admin/login' component={() => <div>admin route login</div>}/>
                </Fragment>
            </Switch>
        )
    }
}

export default Admin