import React, { useState, useEffect } from 'react'
import { Layout, Input, Button } from 'element-react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import CONST from 'Root/constants'
import styles from '../styles'
import classes from 'Root/styles/main'
import API from 'Root/api'
import store from 'Root/store'
import history from 'Root/history'
import helper from 'Root/helper'

import { imageURL } from 'Root/config'

import Counters from './Counters'
import FollowButton from './FollowButton'

const LABELS = CONST.labels.usersPage

const Header = props => {
    const {
        myProfile,
        userProfile,
    } = props

    const numbersDefault = {
        followers: 0,
        followings: 0,
        posts: 0,
        likes: 0,
    }
    const [mobileScreen, setMobileScreen] = useState(helper.screenCheck())
    const [numbers, setNumbers] = useState(numbersDefault) 

    useEffect(() => {
        window.addEventListener('resize', () => {
            setMobileScreen(helper.screenCheck())
        })
    })

    const profileImage = helper.handleImage(userProfile.image, 'image')
    const profileCover = helper.handleImage(userProfile.cover, 'cover')
    return(
        <>
            { userProfile != null &&
            !mobileScreen ? 
            <Layout.Row className={styles.profile}>
                <div className={styles.header}>
                    <div className={styles.cover} 
                    style={{backgroundImage: `url(${profileCover}`}}></div>
                    <Layout.Row type='flex' justify='center' className={styles.panel}>
                        <Layout.Col sm={20} xs={22} className={styles.panelBar}>
                            <div>
                                <span style={{backgroundImage: `url(${profileImage})`}}
                                    className={styles.image}>
                                </span>
                            </div>
                            <div className={styles.description}>
                                <div className={styles.head}>
                                    <h1 className={classnames(styles.fullname)}>{userProfile.fullname}</h1>
                                    <Counters numbers={numbers}/>
                                    <FollowButton />
                                </div>
                                <h2 className={styles.username}>
                                    @{userProfile.username}
                                </h2>
                                {userProfile.bio && 
                                    (<p className={styles.bio}>
                                        {userProfile.bio}
                                    </p>)
                                }
                            </div>
                        </Layout.Col>
                    </Layout.Row>
                </div>
            </Layout.Row>
            :
            <Layout.Row className={styles.profile}>
                <div className={styles.header}>
                    <div className={styles.cover} 
                    style={{backgroundImage: `url(${profileCover}`}}></div>
                    <Layout.Row type='flex' justify='center' className={styles.panel}>
                        <Layout.Col xs={24} className={styles.panelBar}>
                            <div className={styles.head}>
                                <span style={{backgroundImage: `url(${profileImage})`}}
                                    className={styles.image}>
                                </span>
                                <FollowButton />
                            </div>
                            <div className={styles.body}>
                                <div className={styles.description}>
                                    <h1 className={classnames(styles.fullname)}>{userProfile.fullname}</h1>
                                    <h2 className={styles.username}>
                                        @{userProfile.username}
                                    </h2>
                                    {userProfile.bio && 
                                        (<p className={styles.bio}>
                                            {userProfile.bio}
                                        </p>)
                                    }
                                </div>
                            </div>
                            <Counters numbers={numbers}/>  
                        </Layout.Col>
                    </Layout.Row>
                </div>
            </Layout.Row>}
        </>
    )
}

export default connect(state => ({
    userProfile: state.userProfile,
    myProfile: state.myProfile,
}))(Header)