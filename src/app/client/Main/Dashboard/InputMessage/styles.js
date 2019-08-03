import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    container: {
        display: 'flex',
        position: 'absolute',
        alignItems: 'center',
        bottom: '0',
        right: '0',
        left: '0',
        background: '#eef1f6',
        padding: '1rem',
    },
    input: {
        width: '100%',
    },
    sendButton: {
        color: CONST.colors.white,
        background: '#21a0ff',
        margin: '0 0 0 .5rem',
        padding: '.2rem',
        width: '1.5rem !important',
        height: '1.5rem !important',
        borderRadius: '50%',
        cursor: 'pointer',
    },
    button: {
        color: '#8092a8 !important',
        margin: '0 0 0 .5rem',
        padding: '.2rem',
        width: '1.5rem',
        height: '1.5rem',
        borderRadius: '50%',
        cursor: 'pointer',
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