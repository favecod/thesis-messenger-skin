import React from 'react'
import { Button } from 'element-react'
import classnames from 'classnames'
import styles from './styles'


const DefaultButton = props => {
    return(
        <Button {...props} className={classnames(styles.button, styles[props.type])} />
    )
} 
export default DefaultButton