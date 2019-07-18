import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import styles from './styles'
import classes from 'Root/styles/main'

const Header = props => {
    const { myProfile } = props
    return(
        <>
            Header
        </>
        
    )
}

export default connect(state => ({
    myProfile: state.myProfile
}))(Header)