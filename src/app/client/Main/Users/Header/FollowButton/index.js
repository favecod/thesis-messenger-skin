import React, { useState, useEffect } from 'react'
import Button from 'Root/elements/Button'
import { connect } from 'react-redux'
import classnames from 'classnames'

import CONST from 'Root/constants'
import helper from 'Root/helper'
import history from 'Root/history'
import API from 'Root/api'
import styles from './styles'
import getProfile from 'Root/actions/userProfile/getProfile'


const LABELS = CONST.labels.usersPage

const FollowButton = props => {
    const { myProfile, userProfile } = props
    const [buttonStatus] = useState(props.buttonStatus)
    const [icon, setIcon] = useState(props.icon)
    const [isLoad, setIsLoad] =  useState(false)

    useEffect(() => {
        setIcon(handleIcon(buttonStatus))
    })

    const handleIcon = buttonStatus => {
        switch (buttonStatus) {
            case 'myProfile': return 'setting'
            case 'follow': return 'check'
            case 'notFollow': return 'plus'
            default: return 'loading'
        }
    }

    const editProfile = () => {
        history.push({
            pathname: `/users/${myProfile.username}/edit`,
            state: {
                username: myProfile.username
            }
        })
    }

    const followUser = async () => {
        if (props.myProfile === undefined) {
            helper.notification('Warning', 'Please Login to Plug', 'warning')
            history.push({
                pathname: '/login'
            })
        }
        setIsLoad(true)
        let result = await API.friends.follow(userProfile.id)
        if (result.data.success) {
            setIsLoad(false)
            getProfile({
                buttonStatus: result.data.data.buttonStatus,
                followersNumber: result.data.data.followersNumber,
            })
            setIcon(handleIcon(result.data.data.buttonStatus))
        }
    }

    const unfollowUser = async () => {
        setIsLoad(true)
        let result = await API.friends.unfollow(this.props.userProfile.id)
        if (result.data.success) {
            setIsLoad(false)
            getProfile({
               buttonStatus: result.data.data.buttonStatus,
               followersNumber: result.data.data.followersNumber,
            })
            setIcon(handleIcon(result.data.data.buttonStatus))
        }
    }

    return(
        <>
            { buttonStatus === 'myProfile' ? 
                (<Button className={styles.profileButton}
                onClick={editProfile} 
                icon={icon} loading={isLoad} type='info' plain={true} >
                    {LABELS.editButton}
                </Button>)
                : buttonStatus === 'follow' ?
                (<Button className={styles.profileButton} 
                onClick={unfollowUser}
                icon={icon} loading={isLoad} type='success'>
                    {LABELS.followingButton}
                </Button>)
                :
                (<Button className={styles.profileButton} 
                onClick={followUser}
                icon={icon} loading={isLoad} type='primary'>
                    {LABELS.followButton}
                </Button>)
            }
        </>
    )
}

export default connect(state => ({
    buttonStatus: state.userProfile.buttonStatus,
    myProfile: state.myProfile,
    userProfile: state.userProfile,
}))(FollowButton)