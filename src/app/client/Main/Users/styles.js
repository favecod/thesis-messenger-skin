import jss from 'jss'
import preset from 'jss-preset-default'
import CONST from 'Root/constants'

jss.setup(preset())

const styles = {
    profile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#24292d',
    },
    header: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    cover: { 
        width: '100%',
        height: '50vh',
        display: 'flex',
        top: '0',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#404b69',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    panel: {
        margin: '0',
        // border: '1px solid #e2e4e8',
        boxShadow: CONST.styles.boxShadow,
        zIndex: '2',
        background: '#fff',
        width: '100vw'
    },
    panelBar: {
        display: 'flex',
        width: '100%',
    },
    head: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        margin: '-6.25rem 0 0',
        width: '12.5rem !important',
        height: '12.5rem !important',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#efefef',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: '50%',
        border: '5px solid white',
    },
    description: {
        fontFamily: 'Google',
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',  
    },
    profileButton: {
        borderRadius: '3rem !important'
    },
    doneButton: {
        borderRadius: '3rem !important',
    },
    fullname: {
        fontWeight: '500',
        maxWidth: '25vw',
    },
    username: {
        color: '#99a9bf',
        fontWeight: 'normal',
        overflow: 'hidden',
        margin: '0 0 .5rem'
    },
    bio: {
        margin: '0'
    },
    numbers: {
        width: '20vw',
    },
    uploadButton: {
        background: 'rgba(0,0,0,0.5)',
        width: '5.5rem',
        height: '5.5rem',
        borderRadius: '50%',
        cursor: 'pointer',
        color: 'white',
        fontSize: '2.5rem',
    },
    '@media (max-width: 768px)': {
        panel: {
            flexDirection: 'column',
            alignItems: 'center',
            fontSize: '100%',
            margin: '0',
            border: '1px solid #e2e4e8',
            zIndex: '2',
            background: '#fff',
            width: '100vw !important'

        },
        cover: {
            height: '20vh !important',
        },
        panelBar: {
            flexDirection: 'column',
            width: '100vw',
            padding: '.5rem 0',
        },
        image: {
            margin: '-3.75rem 0 0',
            width: '5.9375rem !important',
            height: '5.9375rem !important',
            border: '4px solid white'
        },
        head: {
            flexDirection: 'row',
            padding: '0 1rem'
        },
        body: {
            padding: '0 1rem'
        },
        fullname: {
            fontSize: '1.5rem',
            maxWidth: '100vw',
        },
        username: {
            fontSize: '1.25rem',
        },
        description: {
            padding: '0',
            margin: '0',
        },
        doneButton: {
            borderRadius: '3rem !important',
            width: '100%'
        },
        profileButton: {
            width: '2rem',
            height: '2rem',
            borderRadius: '50% !important',
            padding: '0 !important'
        },
        numbers: {
            display: 'flex',
            margin: '1rem 0 0',
            padding: '1rem 0',
            justifyContent: 'space-around',
            width: '100% !important',
            borderTop: '1px solid #e2e4e8'
        },
        uploadButton: {
            width: '3rem',
            height: '3rem',
            color: 'white',
            fontSize: '1.5rem',
        },
    }
}

const { classes } = jss.createStyleSheet(styles).attach()

export default classes