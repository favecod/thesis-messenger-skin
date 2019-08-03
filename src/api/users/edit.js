import axios from 'axios'
import { apiURL } from 'Root/config'

export default async function (data) {
    const options = {
        method: 'put',
        url: apiURL + '/user/',
        data
    }
    return await axios(options)
}