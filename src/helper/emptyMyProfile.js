import loginUser from 'Root/actions/myProfile/login'
import history from 'Root/history'
import helper from 'Root/helper'

export default function (response,type = 'error') {
    if (response.data.status === 401) {
        loginUser({
            token: null,
            username: null,
            image: null,
            cover: null,
            id: null,
        })
        helper.LOCAL_STORAGE.remove('myProfile')
        helper.notification('Error', response.data.message, type)
        history.push({
            pathname: '/login'
        })
        return false
    } else {
        return true
    }
}