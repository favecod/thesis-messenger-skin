import React, { useState, useEffect } from 'react'
import { Layout, Input, Button, Form, Message, Upload } from 'element-react'
import { connect } from 'react-redux'
import classnames from 'classnames'

import CONST from 'Root/constants'
import styles from '../styles'
import classes from 'Root/styles/main'
import API from 'Root/api'
import store from 'Root/store'
import history from 'Root/history'
import UploadImage from 'Root/elements/UploadImage'

import getProfile from 'Root/actions/userProfile/getProfile'
import loginUser from 'Root/actions/myProfile/login'
import helper from 'Root/helper'

const LABELS = CONST.labels.editUsersPage

const Edit = props => {
    const [username] = useState(props.match.params.username)
    const [form, setForm] = useState(null)
    const [response, setResponse] = useState('fetching')
    const [myProfile] = useState(props.myProfile)
    const [isLoad, setIsLoad] = useState(false)
    const [mobileScreen, setMobileScreen] = useState(helper.screenCheck())


    useEffect(() => {
        window.addEventListener('resize', () => {
            setMobileScreen(helper.screenCheck())
        })
        if (username !== myProfile.username) {
            history.push({
                pathname: `/users/${username}`,
                state: {
                    username
                }
            })
        }
        if(!form) {
            getUser(username)
        }
    })

    const getUser = async username => {
        let result = await API.users.show(username)
        if(result.data.success) {
            setForm(result.data.data)
            setResponse('found')
        } else {
            setResponse('notfound')
        }
    }

    const handelChange = (element, value) => {
        setForm(prevState => {
            return {
                ...prevState,
                [element]: value
            }
        })
    }  

    const handelSubmit = async () => {
        if(form.fullname == '') {
            return helper.notification('Warning', LABELS.notifiFullname, 'warning')
        } else if (form.username == '') {
            return helper.notification('Warning', LABELS.notifiUsername, 'warning')
        } else {
            let userData = {
                fullname: form.fullname,
                username: form.username,
                bio: form.bio,
                token: myProfile.token
            }
            setIsLoad(true)
            const result = await API.users.edit(userData)
            const { success, message, data } = result.data
            
            helper.emptyMyProfile(result)

            setIsLoad(false)
            if(success) {
                helper.notification('Success', message, 'success')
                
                loginUser(helper.LOCAL_STORAGE.change('myProfile', {
                    username: userData.username
                }))

                history.push({
                    pathname: `/users/${userData.username}`,
                    state: {
                        username: userData.username
                    }
                })
            } else {
                helper.notification('Error', message, 'error')
            }
        }
    }

    const setImageToStore = image => {
        loginUser(helper.LOCAL_STORAGE.change('myProfile', image))
    }

    const profileImage = helper.handleImage(props.myProfile.image, 'image')
    const profileCover = helper.handleImage(props.myProfile.cover, 'cover')
    return(
        <>
            { form != null ? 
            <Layout.Row className={styles.profile}>
                <div className={styles.header}>
                    <div className={styles.cover} 
                    style={{backgroundImage:`url(${profileCover}`}}>
                        <UploadImage 
                            changeImage={setImageToStore}
                            fontSize={2} 
                            address='/user/cover' 
                            borderRadius={0}
                            height={70}
                            size='small'
                            name='cover'
                        />
                    </div>
                    <Layout.Row type='flex' justify='center' className={styles.panel}>
                        <Layout.Col sm={20} xs={22} className={styles.panelBar}>
                            <div>
                                <span style={{backgroundImage: `url(${profileImage})`}}
                                    className={styles.image}>
                                    <UploadImage 
                                        changeImage={setImageToStore} 
                                        fontSize={2} 
                                        address='/user/image' 
                                        borderRadius={250}
                                        name='image'
                                    />
                                </span>
                            </div>
                            
                            <Form labelPosition='top' className={styles.description}>
                                <Form.Item label={LABELS.fullnameLabel} >
                                    <Input size='large' defaultValue={form.fullname}
                                    onChange={e => handelChange('fullname',e)}/>
                                </Form.Item>   

                                <Form.Item label={LABELS.usernameLabel}>
                                    <Input size='large' prepend='@' defaultValue={form.username}
                                    onChange={e => handelChange('username',e)}/>
                                </Form.Item>

                                <Form.Item label={LABELS.bioLabel}>
                                    <Input size='large' type='textarea'
                                    onChange={e => handelChange('bio',e)}
                                    rows={mobileScreen ? 4 : 2} defaultValue={form.bio}/>
                                </Form.Item>

                                {/* <Form.Item label={LABELS.birthdayLabel}>
                                    <DatePicker
                                        placeholder='Pick a day'
                                    />
                                </Form.Item> */}

                                    <Form.Item>
                                    <Button type='success' className={styles.doneButton}
                                    onClick={handelSubmit}
                                    icon='check' loading={isLoad}>
                                        {LABELS.doneButton}
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Layout.Col>
                    </Layout.Row>
                </div>
            </Layout.Row>
            : response === 'fetching' ?
            <div className={classnames(classes.fontSize5rem,classes.loading)}>
                <i className='el-icon-loading'></i>
            </div>
            :
            <div className={classnames(classes.fontSize5rem,classes.loading)}>
                <i className='el-icon-cross'></i>
            </div>}
        </>
    )
}

export default connect(state => ({
    myProfile: state.myProfile,
    userProfile: state.userProfile
}))(Edit)