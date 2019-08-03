export default function (response) {
    if (response.data.success) {
        return true
    } else {
        return false
    }
}