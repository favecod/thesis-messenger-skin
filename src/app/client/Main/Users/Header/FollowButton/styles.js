import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'

jss.setup(preset())

const styles = {
    profileButton: {
        borderRadius: '3rem !important'
    },
    '@media (max-width: 768px)': {
        profileButton: {
            width: '2rem !important',
            height: '2rem !important',
            borderRadius: '50% !important',
            padding: '0 !important',
        },
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes