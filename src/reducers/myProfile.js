import types from 'Root/actions'
import helper from 'Root/helper'

let myProfile = {
    token: null,
    username: null,
    fullname: null,
    image: null,
    cover: null,
    id: null,
}

let storage = helper.LOCAL_STORAGE.get('myProfile')

if (storage !== null) {
    myProfile = JSON.parse(storage)
}

export default (state = myProfile, action) => {
    switch(action.type) {
        case types.myProfile.LOGIN: 
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}