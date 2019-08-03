import React from 'react'
import { Layout, Button } from 'element-react'
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import CONST from 'Root/constants'
import styles from './styles'
import helper from 'Root/helper';

const LABELS = CONST.labels.homePage

const getUsers = gql`
    {
        getUsers {
            username
            fullname
        }
    }
`
const Home = props => {
    console.log(props)
    helper.setTitle('صفحه اصلی |‌ تالار')
    return(
        <Layout.Row>
            <Layout.Col className={styles.home}>
                    <h1 className={styles.logo}>{LABELS.logo}</h1>
                    <div className={styles.content}>
                        <p className={styles.description}>
                            {LABELS.description}
                        </p>
                        <Link to='/login' >
                            <Button plain={true} type='info' className={styles.button} size='large'>
                                {LABELS.loginButton}
                            </Button>
                        </Link>
                    </div>
            </Layout.Col>
        </Layout.Row>
    )
}

export default graphql(getUsers)(Home)