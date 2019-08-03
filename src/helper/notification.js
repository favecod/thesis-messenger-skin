import { Notification, Message } from 'element-react'
import store from 'Root/store'
import classes from 'Root/styles/main'
import helper from 'Root/helper';

export default function (title, message, type) {
    const mobileScreen = helper.screenCheck()
    if (mobileScreen){
        return Message({ 
            showClose: true,
            customClass: 'z1000',
            message,
            type,
        })
    } else {
        return Notification({ 
            title,
            message, 
            type,
            duration: 1500,
        })
    }
}