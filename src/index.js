import React from 'react'
import { render } from 'react-dom'
import locale from 'element-react/src/locale/lang/en'
import { i18n } from 'element-react'

import Container from 'Root/container'
import { Provider } from 'react-redux'
import store from 'Root/store'
import 'element-theme-default'
import 'Root/css/index.css'

i18n.use(locale)

render(
        <Provider store={store}>
            <Container/>
        </Provider>,
    document.querySelector('#root')
)