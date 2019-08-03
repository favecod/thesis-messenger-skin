import React from 'react'
import styles from './styles'
import moment from 'jalali-moment'
import helper from 'Root/helper'

const MessageGroup = ({data}) => {
    return <div>
        {data.attached == 'join' && <small className={styles.alert}>
            <strong style={{ padding: '0 .5rem', color: '#47576a'}}>{data.text}</strong>
            <span>به گروه ملحق شد</span>
        </small>}
        {data.attached == 'leave' && <small className={styles.alert}>
            <strong style={{ padding: '0 .5rem', color: '#47576a' }}>{data.text}</strong>
            <span>گروه را ترک کرد</span>
        </small>}
        {!['join','leave'].includes(data.attached) && 
            <div className={styles.message}>
                <h6 className={styles.username}>{data.user.fullname}</h6>
                <div className={styles.text}>
                    {data.text}
                </div>
                <small className={styles.date}>
                    {helper.en2FaNumber(moment(parseInt(data.createdAt)).locale('fa').fromNow())}
                </small>
            </div>}
        
    </div>
}

export default MessageGroup