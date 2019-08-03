import axios from 'axios'
import { apiURL } from 'Root/config'

export default async function (data) {
    const options = {
        method: 'post',
        url: apiURL + '/login',
        data
    }
    return await axios(options)
}