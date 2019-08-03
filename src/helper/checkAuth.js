export default function (response) {
    if (response.data.status === 401) {
        return false
    } else {
        return true
    }
}