import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

const styles = {
    profile: {
        width: '2.3rem',
        height: '2.3rem',
        display: 'flex',
        margin: '.1rem 0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        background: '#efefef',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        border: '1px solid #ddd',
        cursor: 'pointer',
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes