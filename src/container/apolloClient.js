import ApolloClient from 'apollo-boost'
import store from 'Root/store'
import config from 'Root/config'

const client = new ApolloClient({
    uri: `${config.websiteURL}`,
    headers: {
        token: store.getState().myProfile.token
    }
})

export default client