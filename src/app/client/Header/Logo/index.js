import React from 'react'
import { Link } from 'react-router-dom'
import CONST from 'Root/constants'
import styles from './styles'
const LABELS = CONST.labels.header

const Logo = () => {
    return(
        <Link className={styles.logo} to='/'>
            <h1 className={styles.title}>
                {LABELS.logoTitle}
            </h1>
        </Link>
    )
}

export default Logo