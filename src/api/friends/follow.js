import axios from 'axios'
import { apiURL } from 'Root/config'
import store from 'Root/store'

export default async function (friendId) {
    const token = store.getState().myProfile.token
    const options = {
        method: 'put',
        url: apiURL + '/user/friend/add',
        data: {
            token,
            friendId
        }
    }
    return await axios(options)
}