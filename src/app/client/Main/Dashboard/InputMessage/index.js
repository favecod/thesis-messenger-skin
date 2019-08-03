import React from 'react'
import { Input } from 'element-react'
import { gql } from 'apollo-boost'
import { graphql, compose, Query } from 'react-apollo'

import styles from './styles'
import helper from 'Root/helper'
import { ArrowUp, Paperclip } from 'react-feather'

const addMessage = gql`
    mutation addMessage($text: String!, $groupId: ID!, $attached: String){
        addMessage(text: $text, groupId: $groupId, attached: $attached) {
            text
            userId
            groupId
            attached
            user {
                username
                fullname
            }
        }
    }
`

const register = gql`
    mutation register($username: String!,$password: String!, $fullname: String!){
        register(username: $username,password: $password, fullname: $fullname) {
            id
            username
            fullname
        }
    }
`
const InputMessage = props => {
    const inputMessage = React.useRef()
    console.log(props)
    const sendMessage = (e) => {
        const message = {
            groupId: props.groupData.id,
            text: inputMessage.current.refs.input.value
        }
        inputMessage.current.refs.input.value = ''
        props.addMessage({
            variables: { ...message },
        }).then(res => console.log(res))
    }
    return <div className={styles.container}>
        <Input ref={inputMessage} className={styles.input}/>
        <div onClick={(e) => sendMessage(e)} className={styles.sendButton}>
            <ArrowUp />
        </div>
        <div className={styles.button}>   
            <Paperclip />
        </div>
    </div>
}

export default graphql(addMessage, { name: 'addMessage'})(InputMessage)