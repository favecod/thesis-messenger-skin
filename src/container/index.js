import React, { Fragment, StrictMode } from 'react'
import { Router } from 'react-router-dom'
import history from 'Root/history'

import { Provider } from 'react-redux'
import store from 'Root/store'

import App from 'Root/app'

const Container = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                {/* <StrictMode> */}
                    <App/>
                {/* </StrictMode> */}
            </Router>
        </Provider>
    )
}
export default Container