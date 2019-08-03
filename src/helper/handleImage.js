import { imageURL } from 'Root/config'
import CONST from 'Root/constants'

const defaults = CONST.defaults

export default (image, type) => { 
    if (image) {
        return `${imageURL}/${image}`
    } else {
        switch (type) {
            case 'image':
                return defaults.ProfileImage
            case 'cover':
                return defaults.ProfileCover
        }
    }
}