import React, { Component } from 'react'
import { connect } from 'react-redux'

import history from 'Root/history'
import styles from './styles'
import helper from 'Root/helper'

const Profile = props => {
    const { myProfile } = props
    const handelLink = () => {
        let path = history.location.pathname

        if(`/users/${myProfile.username}` !== path){
            history.push({
                pathname: `/users/${myProfile.username}`,
                state: {
                    username: myProfile.username
                }
            })
        }
    }
    const profileImage = helper.handleImage(myProfile.image, 'image')
    return( 
        <div onClick={handelLink} 
        style={{backgroundImage:`url(${profileImage})`}} 
        className={styles.profile}>
            
        </div>
    )
} 
export default connect(state => ({
    myProfile: state.myProfile
}))(Profile)