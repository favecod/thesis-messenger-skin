import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    message: {
        display: 'inline-flex',
        flexDirection: 'column',
        background: '#edf1f6',
        padding: '.5rem 1.5rem .25rem 1rem',
        borderRadius: '.75rem .75rem .75rem 0',
        margin: '.5rem 0'
    },
    username: {
        fontSize: '.75rem',   
        color: '#48576a',
    },
    text: {
        fontSize: '.85rem',
        color: '#444 !important'
    },
    date: {
        fontSize: '.5rem',
        color: CONST.colors.gray,
        direction: 'rtl'
    },
    alert: {
        fontSize: '.75rem',
        color: '#48576a',
        background: 'rgba(128,146,168,0.1)',
        padding: '0 .5rem',
        borderRadius: '.25rem'
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