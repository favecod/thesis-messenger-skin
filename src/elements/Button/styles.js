import jss from 'jss'
import preset from 'jss-preset-default'
import COLORS from 'Root/constants/colors'

jss.setup(preset())

const styles = {
    button: {
        fontFamily: 'iransans',
        padding: '.5rem 1.5rem !important',
        borderRadius: '3rem !important',
    },
    // primary: {
    //     // background: COLORS.primary,
    //     // borderColor: COLORS.primary,
    // },
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes