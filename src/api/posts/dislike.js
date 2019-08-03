import axios from 'axios'
import { apiURL } from 'Root/config'
import store from 'Root/store'

export default async function (postId) {
    const token = store.getState().myProfile.token
    const options = {
        method: 'delete',
        url: apiURL + '/users/post/like',
        data: {
            token,
            postId
        }
    }
    return await axios(options)
}