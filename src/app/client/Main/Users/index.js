import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import classes from 'Root/styles/main'
import API from 'Root/api'
import store from 'Root/store'

import getProfile from 'Root/actions/userProfile/getProfile'
import Header from './Header'
import helper from 'Root/helper';

const Profile = props => {
    const [ pathname ] = useState(props.match.params.username)
    const [ user, setUser ] = useState(null)
    const [ status, setStatus ] = useState('fetching')

    useEffect(() => {
        if(!user) {
            getUser(pathname)
        }
    })

    const getUser = async (username) => {
        let result = await API.users.show(username)
        if (result.data.success) {
            let friendStatus = await API.friends.check(result.data.data.id)
            let userData = {
                ...result.data.data,
                buttonStatus: handleButtonStatus(friendStatus.data.success, result.data.data.id)
            }
            getProfile(userData)
            setUser(result.data.data)
            helper.setTitle(result.data.data.fullname)
            setStatus('found')
        } else {
            setStatus('notFound')
        }
    }

    const handleButtonStatus = (status, userId) => {
        const myId = store.getState().myProfile.id
        if(myId === userId) {
            return 'myProfile'
        } else if(status) {
            return 'follow'
        } else {
            return 'notFollow'
        }
    }
    return(
        <>
            { user != null && 
            <>
                <Header/>
            </>}

            { status === 'fetching' &&
            <div className={classnames(classes.fontSize5rem,classes.loading)}>
                <i className='el-icon-loading'></i>
            </div>}

            { status === 'notFound' && 
            <div>
                <div className={classnames(classes.loading)}>
                    <h1 className={classes.m1}>
                        User Not Found
                    </h1>
                    <i className={classnames('el-icon-circle-cross', classes.fontSize5rem)}></i>
                </div>
            </div>}
        </>
    )
}

export default Profile