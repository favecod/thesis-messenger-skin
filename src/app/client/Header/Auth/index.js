import React from 'react'
import { Link } from 'react-router-dom'

import Button from 'Root/elements/Button'
import CONST from 'Root/constants'

const LABELS = CONST.labels.header

const Auth = () => {
    return(
        <>
            <Link to='/login'>
                <Button type='primary' size='small'>
                    {LABELS.authButtonLabel}
                </Button>
            </Link>
        </>
    )
} 
export default Auth