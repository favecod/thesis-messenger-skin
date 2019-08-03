import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

const styles = {
    home: {
        fontFamily: 'iransans',
        height: '95vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#fff',
    },
    logo: {
        fontFamily: 'iransans',
        fontSize: '2rem',
        fontWeight: '500',
        textAlign: 'center',
        color: '#2d3436',
        margin: '0',
    },
    content: {
        display: 'flex',
        fontFamily: 'iransans',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
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