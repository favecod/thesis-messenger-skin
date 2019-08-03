import axios from 'axios'
import { apiURL } from 'Root/config'
import store from 'Root/store'

export default async function (id) {
    const options = {
        method: 'post',
        url: apiURL + `/users/${id}/followers`,
        data: {
            token: store.getState().myProfile.token
        }
    }
    return await axios(options)
}