import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Layout, Input, Button, Form } from 'element-react'

import store from 'Root/store'
import CONST from 'Root/constants'
import API from 'Root/api'
import styles from './styles'
import history from 'Root/history'
import helper from 'Root/helper'


const LABELS = CONST.labels.joinPage

const Join = props =>{
    helper.setTitle('عضویت |‌ تالار')
    const formObject =  {
        fullname: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: ''
    }
    const [form, setForm] = useState(formObject)
    const [isLoad, setIsLoad] = useState(false)

    useEffect(() => {
        if (props.myProfile.token) {
            history.push({
                pathname: `/users/${props.myProfile.username}`,
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
        if(form.username == '' &&
            form.fullname == '' && 
            form.email == '' && 
            form.password == '' && 
            form.confirmPassword == '') {
            return helper.notification('Warning', LABELS.notifiUsernameAndPassword, 'warning')
        } else if (form.username == '') {
            return helper.notification('Warning', LABELS.notifiUsername, 'warning')
        } else if (form.fullname == '') {
            return helper.notification('Warning', LABELS.notifiFullname, 'warning')
        } else if (form.email == '') {
            return helper.notification('Warning', LABELS.notifiEmail, 'warning')
        } else if (form.password == '') {
            return helper.notification('Warning', LABELS.notifiPassword, 'warning')
        } else if (form.confirmPassword == '') {
            return helper.notification('Warning', LABELS.notifiConfirmPassword, 'warning')
        } else if (form.confirmPassword !== form.password) {
            return helper.notification('Warning', LABELS.notifiPasswordAndConfirmPassword, 'warning')
        } else {
            setIsLoad(true)
            const res = await API.auth.join(form)
            const { success, message } = res.data

            setIsLoad(false)
            if (success) {
                history.push({
                    pathname: `/login`,
                })
            } else {
                return helper.notification('Error', message, 'error')
            }
        }
    }

    return(
        <Layout.Row  className={styles.join}>
            <Layout.Col xs={22} md={8} className={styles.frame}>
                <div className={styles.header}>
                    <Link className={styles.button} to='/'>
                        <h2 className={styles.logo}>{LABELS.description}</h2>
                    </Link>
                </div>
                <Form model={form}>
                        <Form.Item label={LABELS.fullnameLabel} 
                        prop='fullname'>
                            <Input 
                                size='large'
                                style={{borderColor:'red'}}
                                defaultValue={form.fullname}
                                onChange={e => handelChange('fullname',e)}
                                className={styles.input}
                            />
                        </Form.Item>
                        <Form.Item label={LABELS.usernameLabel} 
                        prop='username'>
                            <Input 
                                size='large'
                                style={{borderColor:'red'}}
                                defaultValue={form.username}
                                onChange={e => handelChange('username',e)}
                                className={styles.input}
                            />
                        </Form.Item>
                        <Form.Item label={LABELS.emailLabel} 
                        prop='email'>
                            <Input 
                                size='large'
                                style={{borderColor:'red'}}
                                defaultValue={form.email}
                                onChange={e => handelChange('email',e)}
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
                        <Form.Item label={LABELS.confirmPasswordLabel} prop='confirmPassword'>
                            <Input 
                                type='password'
                                size='large' 
                                defaultValue={form.confirmPassword}
                                onChange={e => handelChange('confirmPassword',e)}
                                className={styles.input}
                            />
                        </Form.Item>
                        <Form.Item>
                            <div className={styles.footer}>
                                <Link to='/login'>
                                    <Button className={styles.button} type='text'>
                                        {LABELS.loginButton}
                                    </Button>
                                </Link>
                                <Button className={styles.fillButton}
                                    type='primary'
                                    loading={isLoad}
                                    onClick={handleSubmit}>
                                    {LABELS.joinButton}
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
            </Layout.Col>
        </Layout.Row>
    )
}

export default connect(state => ({
    myProfile: state.myProfile
}))(Join)