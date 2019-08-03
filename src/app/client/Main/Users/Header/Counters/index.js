import React, { useState } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import styles from './styles'
import CONST from 'Root/constants'
import classes from 'Root/styles/main'
import helper from 'Root/helper'
import Counter from './Counter'

const LABELS = CONST.labels.usersPage

const Counters = props => {
    const countersDefault = {
        posts: {
            label: LABELS.postsLabel,
            number: props.posts
        },
        followings: {
            label: LABELS.followingLabel,
            number: props.followings
        },
        followers: {
            label: LABELS.followersLabel,
            number: props.followers
        },
        likePosts: {
            label: LABELS.likePostsLabel,
            number: props.likePosts
        },
    }

    const [counters] = useState(countersDefault)
    
    return(
        <div className={classnames(classes.flexRowBetween, styles.counters)}>
            {Object.values(counters).map(item => (
                <Counter 
                    key={item.label} 
                    label={item.label} 
                    number={item.number}
                />
            ))}
        </div>
    )
}

export default connect(state => ({
    followings: state.userProfile.followingsCounter,
    followers: state.userProfile.followersCounter,
    posts: state.userProfile.postsCounter,
    likePosts: state.userProfile.likePostsCounter,
}))(Counters)