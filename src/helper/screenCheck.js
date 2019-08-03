import screenCheck from 'Root/actions/screenCheck'

export default function () {
    if (window.innerWidth <= 768) 
        return true
    else {
        return false
    }
}