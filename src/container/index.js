import React, { Fragment, StrictMode } from 'react'
import { Router } from 'react-router-dom'
import history from 'Root/history'
import { connect } from 'react-redux'
import { ApolloProvider } from 'react-apollo'

import store from 'Root/store'

import App from 'Root/app'
import client from './apolloClient'
import myProfile from '../reducers/myProfile';

const Container = props => {
    return (
        <ApolloProvider client={client}>
            <Router history={history}>
                <App/>
            </Router>
        </ApolloProvider>
    )
}
export default connect(state => ({
    myProfile: state.myProfile
}))(Container)