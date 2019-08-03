import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    dashboard: {
        fontFamily: 'iransans',
        height: '95vh',
        display: 'flex',
        background: '#fff',
    },
    header: {
        padding: '1rem 1rem .75rem',
        background: 'e1e2e3',
        borderBottom: `1px dashed ${CONST.colors.gray}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        fontFamily: 'iransans',
        fontSize: '2rem',
        fontWeight: '500',
        textAlign: 'center',
        color: '#2d3436',
        margin: '0',
    },
    profile: {
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'content-fit',
        borderBottom: `1px dashed ${CONST.colors.gray}`,
        color: CONST.colors.gray,
    },
    username: {
        whiteSpace: 'nowrap',
        padding: '.5rem 1.5rem',
        minWidth: '7.5rem',
        textAlign: 'center',
        fontSize: '.85rem'
    },
    profileImage: {
        width: '5rem',
        height: '5rem',
        display: 'flex',
        margin: '.1rem 0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        background: '#fafafa',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        border: '1px solid #ddd',
        cursor: 'pointer',
    },
    groupItem: {
        padding: '0 1rem',
        width: '100%',
        direction: 'rtl'
    },
    content: {
        position: 'relative',
        background: '#fdfdfd',
        width: '100%',
        fontFamily: 'iransans',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bottom:'0',
    },
    logout: {
        borderTop: `1px dashed ${CONST.colors.gray}`,
        borderBottom: `1px dashed ${CONST.colors.gray}`,
        padding: '0 1.5rem',
        width: '100%',
        height: '100%',
    },
    messages: {
        overflow: 'scroll',
        height: '75vh',
        padding: '1rem',
        margin: '0 0 5rem'
    },
    nothing: {
        color: CONST.colors.gray,
        fontSize: '.75rem',
        background: 'rgba(128,146,168,0.1)',
        padding: '1rem',
        borderRadius: '.3rem',
        textAlign: 'center',
    },
    description: {
        fontFamily: 'iransans',
        fontWeight: '300',
        padding: '0 .5rem',
        fontSize: '1.3rem',
    },
    button: {
        fontFamily: 'iransans',
        fontSize: '1.5rem',
        borderRadius: '3rem !important',
        padding: '1rem 4rem !important',
    },
    joinButton: {
        fontFamily: 'iransans',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    '@media (max-width: 768px)': {
        logo: {
            fontSize: '5rem',
        },
    }

}

const {
    classes
} = jss.createStyleSheet(styles).attach()

export default classes