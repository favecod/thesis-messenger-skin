import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'

jss.setup(preset())

const styles = {
    login: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#48576a',
        height: '95vh',
        background: '#fff',
    },
    frame: {
        boxShadow: CONST.styles.boxShadow,
        borderRadius: '1rem',
        background: '#fff',
    },
    logo: {
        fontFamily: 'iransans',
        fontSize: '4rem',
        color: CONST.colors.dark,
        margin: '0'
    },
    header: {
        textAlign: 'center',
        margin: '0 0 1.5rem',
        // background: CONST.colors.dark,
        padding: '2rem 2rem 1rem',
        borderRadius: '1rem 1rem 0 0'
    },
    form: {
        padding: '1rem 2rem 1rem',
    },
    rememberMe: {
        fontFamily: 'iransans',
        margin: '0 .5rem 0 0'
    },
    flexBetween: {
        display: 'flex !important',
        justifyContent: 'space-between !important',
        alignItems: 'center',
    },
    button: {
        fontFamily: 'iransans',
        borderRadius: '3rem !important',
        textDecoration: 'none',
        color: CONST.colors.primary,
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
        login: {
            padding: '0 !important',
        },
        frame: {
            padding: '0 .75rem !important',
            border: 'none !important',
            boxShadow: 'none !important',
        },
        header: {
            background: CONST.colors.white,
        },
        logo: {
            color: CONST.colors.dark
        },
    }
}

const {
    classes
} = jss.createStyleSheet(styles).attach()

export default classes