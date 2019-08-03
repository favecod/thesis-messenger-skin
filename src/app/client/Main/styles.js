import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

const styles = {
    main: {
        fontFamily: 'iransans',
        margin: '2.75rem 0 0'
    },
}

const {
    classes
} = jss.createStyleSheet(styles).attach()

export default classes