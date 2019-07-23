import React from 'react'
import Button, { ButtonGroup } from '@atlaskit/button'
import { Link } from 'react-router-dom'
import styles from './styles'

const Home = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}> تالار گفت و گو</h1>
            <Link className={styles.link} to='/login'>
                <Button className={styles.button} appearance='primary' >
                    شروع
                </Button>
            </Link>
        </div>
    )
}
export default Home