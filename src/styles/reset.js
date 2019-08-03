import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

const styles = {
    app: {
        fontFamily: 'Helvetica Neue',
    },
}

const {
    classes
} = jss.createStyleSheet(styles).attach()

export default classes