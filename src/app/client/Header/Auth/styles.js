import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

const styles = {
    button: {
        borderRadius: '3rem !important',
    },
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes