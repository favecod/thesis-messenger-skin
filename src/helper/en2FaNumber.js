export default text => {
    if (text) {
        text = text.toString()
        let arr = ''
        for (let i = 0; i < text.length; i++) {
            if (text[i].charCodeAt() > 47 && text[i].charCodeAt() < 58) {
                arr += String.fromCharCode(text[i].charCodeAt() + 1728)
            } else {
                arr += text[i]
            }
        }
        return arr
    }
    return false
}