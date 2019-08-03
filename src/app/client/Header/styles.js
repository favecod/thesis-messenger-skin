import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    header: {
        fontFamily: 'iransans',
        position: 'fixed !important',
        width: '100vw',
        top: '0',
        left: '0',
        zIndex: '100',
        padding: '.3rem 0',
        background: '#fff',
        boxShadow: CONST.styles.boxShadow,
    },
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes