import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'

jss.setup(preset())
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '15vw',
        margin: '0 auto'
    },
    title: {
        textAlign: 'center',
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
        color: '#fff !important',
        textDecoration: 'none',
        '&:link': {
            color: '#fff !important',
        }
    },
    '@media (max-width: 768px)': {

    }
}

const {
    classes
} = jss.createStyleSheet(styles).attach()

export default classes