import jss from 'jss'
import preset from 'jss-preset-default'
import COLORS from 'Root/constants/colors'

jss.setup(preset())

const styles = {
    dialog: {
        borderRadius: '1rem !important',
    },
    body: {
        position: 'relative',
        paddingBottom: '0 !important'
    },
    button: {
        padding: '1.5rem',
        background: 'rgba(0,0,0,0.5)',
        color: 'white',
        borderRadius: '50% !important',
        cursor: 'pointer',
    },
    cropper: {
        width: '100% !important',
        height: '100% !important',
        borderRadius: '1rem',
    },
    sendButton: {
        width: '100% !important',
    },
    statusContainer: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
    },
    status: {
        fontSize: '5rem',
    },
    '@media (max-width: 768px)': {
        dialog: {
            borderRadius: '1rem !important',
            width: '90vw !important'
        },
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes