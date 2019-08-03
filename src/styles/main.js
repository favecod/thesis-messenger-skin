import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'
jss.setup(preset())

const styles = {
    body: {
        fontFamily: 'Helvetica Neue',
    },
    // Flex
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flexRowCenter: {
        display: 'flex',
        alignItems: 'center'
    },
    flexColCenter: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    flexRowBetween: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    // Text Color
    textMuted: {
        color: '#99a9bf'
    },
    // Color 
    error: {
        color: '#ff4949 !important',
    },
    success: {
         color: '#13ce66 !important'
    },
    // Text Truncate
    textTrancate: {
        overflow: 'hidden !important',
        textOverflow: 'ellipsis !important',
        whiteSpace: 'nowrap !important',
        wordWrap: 'normal !important',
    },
    loading: {
        display: 'flex',
        color: CONST.colors.gray,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
    },
    // Image
    imageCenter: {
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    // Font Size
    fontSize5rem: {
        fontSize: '5rem !important'
    },
    // Cursor
    pointer: {
        cursor: 'pointer'
    },
    // Radius
    r1: {
        borderRadius: '1rem !important'
    },
    r3: {
        borderRadius: '3rem !important'
    },
    // Margin
    m1: {
        margin: '1rem'
    },
}

const {
    classes
} = jss.createStyleSheet(styles).attach()

export default classes