import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

const styles = {
    logo: {
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center'
    },
    title: {
        color: '#2d3436',
        fontSize: '1.25rem',
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes