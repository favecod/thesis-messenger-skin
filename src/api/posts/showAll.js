import axios from 'axios'
import { apiURL } from 'Root/config'
import store from 'Root/store'
export default async function (data) {
    const token = store.getState().myProfile.token
    const options = {
        method: 'post',
        url: apiURL + '/users/posts',
        data: {
            token,
            ...data
        }
    }
    return await axios(options)
}