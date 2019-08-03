import axios from 'axios'
import { apiURL } from 'Root/config'
import store from 'Root/store'

export default async function () {
    const token = store.getState().myProfile.token
    const options = {
        method: 'post',
        url: apiURL + '/token',
        data: {
            token 
        }
    }
    return await axios(options)
}