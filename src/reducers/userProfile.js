import types from 'Root/actions'
import store from 'Root/store'
import helper from 'Root/helper'

let userProfile = {
    id: null,
    username: null,
    fullname: null,
    followingsCounter: null,
    followersCounter: null,
    postsCounter: null,
    likePostsCounter: null,
    buttonStatus: null,
    active: null,
    image: null,
    cover: null,
}
export default (state = userProfile, action) => {
    switch (action.type) {
        case types.userProfile.GET_PROFILE:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}