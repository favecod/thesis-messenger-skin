import axios from 'axios'
import { apiURL } from 'Root/config'

export default async function (data) {
    const options = {
        method: 'post',
        url: apiURL + '/join',
        data
    }
    return await axios(options)
}