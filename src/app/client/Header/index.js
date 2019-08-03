import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { Layout } from 'element-react';

import Logo from './Logo'
import Profile from './Profile'
import Auth from './Auth'

import styles from './styles'
import classes from 'Root/styles/main'

const Header = props => {
    const { myProfile } = props
    return(
        <>
            <Layout.Row type='flex' justify='center' className={styles.header}>
                <Layout.Col sm={20} xs={22} className={classnames(classes.flexRowBetween)}>
                    <Logo/>
                    {
                        myProfile.token ?
                            (<Profile myProfile={myProfile}/>)
                            :
                            (<Auth/>)
                    }
                </Layout.Col>
            </Layout.Row>
        </>
        
    )
}

export default connect(state => ({
    myProfile: state.myProfile
}))(Header)