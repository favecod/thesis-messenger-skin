import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Layout, Input, Button, Form, Switch } from 'element-react'
import history from 'Root/history'
import classnames from 'classnames'

import store from 'Root/store'
import CONST from 'Root/constants'
import API from 'Root/api'
import styles from './styles'
import helper from 'Root/helper'

import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

import loginUser from 'Root/actions/myProfile/login'

const LABELS = CONST.labels.loginPage


const login = gql`
    query login($username: String!,$password: String!){
        login(username: $username,password: $password) {
            token
            user {
                username
                fullname
                id
            }
        }
    }
`

const Login = props => {
    helper.setTitle('ورود |‌ تالار')
    const formDefault =  {
        username: '',
        password: '',
    }

    const [form, setForm] = useState(formDefault)
    const [isLoad, setIsLoad] = useState(false)

    useEffect(() => {
        if (props.myProfile.token) {
            history.push({
                pathname: `/dashboard`,
                state: {
                    username: props.myProfile.username
                }
            })
        }
    })

    const handelChange = (element, value) => {
        setForm(prevState => {
            return {
                ...prevState,
                [element]: value
            }
        })
    }   

    const handleSubmit = async () => {
        if(form.username == '' && form.password == '') {
            return helper.notification('اخطار', LABELS.notifiUsernameAndPassword, 'warning')
        } else if (form.username == '') {
            return helper.notification('اخطار', LABELS.notifiUsername, 'warning')
        } else if (form.password == '') {
            return helper.notification('اخطار', LABELS.notifiPassword, 'warning')
        } else {
            setIsLoad(true)
            props.data.fetchMore({
                variables: { username: form.username, password: form.password},
                updateQuery: (store, { fetchMoreResult }) => {
                    setIsLoad(false)
                    const data = fetchMoreResult.login
                    let myProfile = {
                        token: data.token,
                        username: data.user.username,
                        image: data.image,
                        cover: data.cover,
                        fullname: data.user.fullname,
                        id: data.user.id
                    }
                    loginUser(myProfile)
                    helper.LOCAL_STORAGE.set('myProfile', JSON.stringify(myProfile))
                    window.location.reload()
                    history.push({
                        pathname: `/dashboard`,
                        state: {
                            username: data.username
                        }
                    })
                }
            }).catch(res => {
                setIsLoad(false)
                return helper.notification('Error', res.graphQLErrors[0].message, 'error')
            })
        }
    }

    return(
        <Layout.Row  className={styles.login}>        
            <Layout.Col xs={24} md={8} className={styles.frame}>
                <div className={styles.header}>
                    <Link className={styles.button} to='/'>
                        <h2 className={styles.logo}>{LABELS.description}</h2>
                    </Link>
                </div>
                <Form model={form} className={styles.form}>
                        <Form.Item label={LABELS.usernameLabel} 
                        prop='username'>
                            <Input 
                                size='large'
                                defaultValue={form.username}
                                onChange={e => handelChange('username',e)}
                                className={styles.input}
                            />
                        </Form.Item>
                        <Form.Item label={LABELS.passwordLabel} prop='password'>
                            <Input 
                                type='password'
                                size='large' 
                                defaultValue={form.password}
                                onChange={e => handelChange('password',e)}
                                className={styles.input}
                            />
                        </Form.Item>
                        <Form.Item>
                            <div className={styles.footer}>
                                <Link to='/join'>
                                    <Button className={styles.button} 
                                    type='text'>
                                        {LABELS.joinButton}
                                    </Button>
                                </Link>
                                <Button className={classnames(styles.fillButton)}
                                    type='primary'
                                    loading={isLoad}
                                    onClick={handleSubmit}>
                                    {LABELS.loginButton}
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
            
            </Layout.Col>
        </Layout.Row>
    )
}

export default graphql(login)(connect(state => ({
    myProfile: state.myProfile
}))(Login))