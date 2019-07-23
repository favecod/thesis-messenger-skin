import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'

jss.setup(preset())
const styles = {
    container: {
        display: 'flex',
        width: '100vw',
        height: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        border: '2px solid #dfe1e6',
        padding: '1rem',
        borderRadius: '4px',
        color: CONST.colors.dark,
        width: '30vw'
    },
    login: {
        fontFamily: 'iransans',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        width: '100% !important',
    },
    button: {
        fontFamily: 'iransans',
        width: '100% !important',
        display: 'flex',
        justifyContent: 'center',
        margin: '1rem 0'
    },
        
    link: {
        width: '100%',
        color: '#0052cc !important',
        '&:link': {
            color: '#0052cc !important',
        }
    },
    '@media (max-width: 768px)': {
        form: {
            width: '95vw',
        }
    }
}

const {
    classes
} = jss.createStyleSheet(styles).attach()

export default classes