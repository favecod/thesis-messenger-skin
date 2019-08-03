import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'

jss.setup(preset())

const styles = {
    join: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#48576a',
        height: '95vh',
        margin: '2rem 0 0',
        background: '#fff',
    },
    frame: {
        boxShadow: CONST.styles.boxShadow,
        padding: '2rem 2rem 1rem',
        borderRadius: '1rem',
        background: '#fff',
    },
    logo: {
        fontFamily: 'iransans',
        fontSize: '4rem',
        color: '#2f3640',
        margin: '0'
    },
    header: {
        textAlign: 'center',
        margin: '0 0 1.5rem'
    },
    flexBetween: {
        display: 'flex !important',
        justifyContent: 'space-between !important',
        alignItems: 'center',
    },
    button: {
        fontFamily: 'iransans',
        borderRadius: '3rem !important',
        textDecoration: 'none'
    },
    fillButton: {
        padding: '.5rem 1.5rem !important',
        fontFamily: 'iransans',
        borderRadius: '3rem !important',
        textDecoration: 'none',
        border: 'none !important'
    },
    footer: {
        display: 'flex !important',
        justifyContent: 'space-between !important',
        alignItems: 'center',
        margin: '1rem 0 0',
    },
    '@media (max-width: 768px)': {
        join: {
            padding: '5rem 0 0 0 !important',
        },
        frame: {
            padding: '0 .75rem !important',
            border: 'none !important', 
            boxShadow: 'none !important',
        }
    }
}

const {
    classes
} = jss.createStyleSheet(styles).attach()

export default classes