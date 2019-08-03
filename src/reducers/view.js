import types from 'Root/actions'
let mobileScreen = false

export default (state = { mobileScreen }, action) => {
    switch(action.type) {
        case types.view.SCREEN_CHECK: 
            return {
                mobileScreen: action.data.mobileScreen
            }
        default:
            return state
    }
}