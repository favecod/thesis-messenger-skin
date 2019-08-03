import React from 'react'
import { connect } from 'react-redux'
import { Layout, Button, Menu, Message } from 'element-react'
import history from 'Root/history'
import { Link } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { graphql, compose, Query, Subscription } from 'react-apollo'
import loginUser from 'Root/actions/myProfile/login'

import CONST from 'Root/constants'
import styles from './styles'
import helper from 'Root/helper'
import MessageGroup from './MessageGroup/'
import InputMessage from './InputMessage/'
import { LogOut, UserCheck, Grid, Plus, Minus  } from 'react-feather'

const LABELS = CONST.labels.homePage

const getGroups = gql`
    {
        getGroups {
            id
            name
            groupname
        }
    }
`

const getMessages = gql`
    query getMessages($groupId: ID!){
        getMessages(groupId: $groupId) {
            id,
            text,
            userId,
            user {
                fullname
            }
            groupId,
            attached,
            createdAt
        }
    }
`

const getGroupsForUser = gql`
    query getGroupsForUser($userId: ID!){
        getGroupsForUser(userId: $userId) {
            joined {
                id
                name
            }
            notJoined {
                id
                name
            }
        }
    }
`

const joinToGroup = gql`
    mutation joinToGroup($userId: ID!,$groupId: ID!){
        joinToGroup(userId: $userId, groupId: $groupId) {
            group {
                name
            }
            user {
                username
            }

        }
    }
`
const leaveFromGroup = gql`
    mutation leaveFromGroup($userId: ID!,$groupId: ID!){
        leaveFromGroup(userId: $userId, groupId: $groupId) {
            group {
                name
            }
            user {
                username
            }

        }
    }
`

const getNewMessage = gql`
  subscription {
    getNewMessage {
        id
        text
        user {
            fullname
        }
        attached
        createdAt
    }
  }
`

const Dashboard = props => {
    const { myProfile } = props
    const [messages,setMessages] = React.useState(null)
    const [groupData, setGroupData] = React.useState(null)
    const [groups, setGroups] = React.useState(null)
    React.useEffect(() => {
        if(!groups) {
            props.getGroupsForUser.fetchMore({
                variables: { userId: myProfile.id },
                updateQuery: (store, { fetchMoreResult }) => {
                    setGroups({
                        joined: fetchMoreResult.getGroupsForUser.joined,
                        notJoined: fetchMoreResult.getGroupsForUser.notJoined
                    })
                }
            })
        }
    })
    console.log(props)
    if(!myProfile.token) {
        history.push({
            pathname: `/login`,
        })
    }
    const profileImage = helper.handleImage(myProfile.image, 'image')
    const showMessage = (data, status) => {
        props.getMessages.fetchMore({
            variables: {groupId: data.id},
            updateQuery: (store, { fetchMoreResult }) => {
                setGroupData({
                    ...data,
                    joined: status
                })
                setMessages(fetchMoreResult.getMessages)
            }
        })
    }
    const logout = () => {
        helper.LOCAL_STORAGE.remove('myProfile')
        let myProfile = {
            token: null,
            username: null,
            image: null,
            cover: null,
            id: null,
        }
        loginUser(myProfile)
        history.push({
            pathname: `/login`,
        })
    }
    const join = ({ groupData }) => {
        props.joinToGroup({
            variables: {
                userId: props.myProfile.id,
                groupId: groupData.id
            }
        }).then(res => {
            setGroupData({
                ...groupData,
                joined: true
            })
            props.getGroupsForUser.fetchMore({
                variables: { userId: myProfile.id },
                updateQuery: (store, { fetchMoreResult }) => {
                    setGroups({
                        joined: fetchMoreResult.getGroupsForUser.joined,
                        notJoined: fetchMoreResult.getGroupsForUser.notJoined
                    })
                }
            })
        })
    }
    const leave = ({ groupData }) => {
        props.leaveFromGroup({
            variables: {
                userId: props.myProfile.id,
                groupId: groupData.id
            }
        }).then(res => {
            setGroupData({
                ...groupData,
                joined: false
            })
            props.getGroupsForUser.fetchMore({
                variables: { userId: myProfile.id },
                updateQuery: (store, { fetchMoreResult }) => {
                    setGroups({
                        joined: fetchMoreResult.getGroupsForUser.joined,
                        notJoined: fetchMoreResult.getGroupsForUser.notJoined
                    })
                }
            })
        })
    }
    helper.setTitle('داشبورد |‌ تالار')
    return(
        <Layout.Row>
            <Layout.Col className={styles.dashboard}>
                <Menu className='el-menu-vertical-demo' onOpen={() => console.log('open')} onClose={() => console.log('close')} style={{position:'relative'}}>
                    <div className={styles.profile}>
                        <div className={styles.profileImage} style={{ backgroundImage: `url(${profileImage})` }}></div>
                        <div className={styles.username}>{myProfile.fullname}</div>
                    </div>
                    <Menu.SubMenu index='1' title={
                        <span><UserCheck size='20' /><span style={{ padding: '0 .5rem' }}
                        >گروه های عضو شده</span></span>}>
                        {
                            groups && groups.joined.map(item => (
                                <Menu.Item style={{ padding: '0' }} key={item.id} index={item.groupname}>
                                    <div className={styles.groupItem} onClick={() => showMessage(item, true)}>
                                        {item.name}
                                    </div>
                                </Menu.Item>
                            ))
                        }
                    </Menu.SubMenu>
                    <Menu.SubMenu index='2' title={
                        <span><Grid size='20' /><span style={{ padding: '0 .5rem' }}
                        >گروه های عضو شده</span></span>}>
                        {
                            groups && groups.notJoined.map(item => (
                                <Menu.Item style={{ padding: '0' }} key={item.id} index={item.groupname}>
                                    <div className={styles.groupItem} onClick={() => showMessage(item, false)}>
                                        {item.name}
                                    </div>
                                </Menu.Item>
                            ))
                        }
                    </Menu.SubMenu>
                    <Menu.Item style={{ padding: '0',position: 'absolute',bottom:'0',left: '0',right: '0' }} index='logout'>
                        <div className={styles.logout} onClick={() => logout()}>
                            <LogOut size='20'/>
                            <span style={{ padding: '0 .5rem' }}>خروج</span>
                        </div>
                    </Menu.Item>
                </Menu>
                <div className={styles.content}>
                    {groupData && <h3 className={styles.header}>
                        <span style={{direction: 'rtl'}}>{groupData.name}</span>
                        {groupData.joined && <Button size='small' type='danger'
                            onClick={() => leave({ groupData })}>
                            <span className={styles.joinButton} >
                                <Minus size='20' /><span style={{ padding: '0 .5rem' }}
                                >ترک کردن</span>
                            </span>
                        </Button>}
                        {!groupData.joined && <Button  size='small' type='success' 
                            onClick={() => join({ groupData })}>
                            <span className={styles.joinButton}>
                                <Plus size='20' /><span style={{ padding: '0 .5rem' }}
                                >ملحق شدن</span>
                            </span>
                        </Button>}
                    </h3>}
                    <div className={styles.messages}>
                        {
                            messages && messages.map(item => (
                                <MessageGroup key={item.id} data={item} />
                            ))
                        }
                        {/* <Subscription subscription={getNewMessage}>
                            {({ data, loading }) => {
                                if (loading) return <div>Fetching</div>
                                console.log('--->', data)
                                return <>
                                    hello
                                </>
                            }}
                        </Subscription> */}
                        {
                            (messages && messages.length == 0) && (
                                <div className={styles.nothing}>هیچ پیامی یافت نشد</div>
                            )
                        }
                    </div>
                    {(groupData && groupData.joined) && <InputMessage groupData={groupData}/>}
                </div>
            </Layout.Col>
        </Layout.Row>
    )
}

export default compose(
    graphql(getMessages, {name: 'getMessages'}),
    graphql(getGroupsForUser, { name: 'getGroupsForUser' }),
    graphql(joinToGroup, { name: 'joinToGroup' }),
    graphql(leaveFromGroup, { name: 'leaveFromGroup' }),
)(connect(state => ({
    myProfile: state.myProfile
}))(Dashboard))