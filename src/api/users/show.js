import axios from 'axios'
import { apiURL } from 'Root/config'

export default async function (username) {
    const options = {
        method: 'post',
        url: apiURL + '/user',
        data: {
            username
        }
    }
    return await axios(options)
}