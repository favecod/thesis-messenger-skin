import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'

jss.setup(preset())

const styles = {
    counters: {
        width: '20vw',
    },
    countersItem: {
        fontWeight: '500',
        fontSize: '1.25rem',
    },
    '@media (max-width: 768px)': {
        counters: {
            display: 'flex',
            margin: '1rem 0 0',
            padding: '1rem 0 !important',
            justifyContent: 'space-around',
            width: '100% !important',
            borderTop: '1px solid #e2e4e8',
        },
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes