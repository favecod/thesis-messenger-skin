import React, { useState } from 'react'
import classnames from 'classnames'

import styles from './styles'
import classes from 'Root/styles/main'

const Counters = props => {
    const [label, setLabel] = useState(props.label)
    const [number, setNumber] = useState(props.number)
    
    return(
        <div className={classnames(classes.flexColCenter,classes.pointer)}>
            <div className={classnames(styles.countersItem)}>
                {number}
            </div>
            <div className={classnames(classes.textMuted)}>{label}</div>
        </div>
    )
}

export default Counters