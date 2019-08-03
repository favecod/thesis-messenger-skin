import React, { useState, createRef, StrictMode } from 'react'
import { connect } from 'react-redux'
import { Dialog } from 'element-react'
import AvatarEditor from 'react-avatar-editor'
import axios from 'axios'
import classnames from 'classnames'
import CONST from 'Root/constants'

import { apiURL } from 'Root/config'
import styles from './styles'
import classes from 'Root/styles/main'
import Button from 'Root/elements/Button'
import defaultCoverProfile from 'Root/public/defaultCoverProfile.jpg'

const LABELS = CONST.labels.uploadImage

const UploadImage = props => {
    const { 
        fontSize = 1,
        address, 
        token, 
        changeImage,
        borderRadius,
        width,
        height,
        name,
        size = 'tiny'
    } = props
    const dialogDefault = {
        visible: false
    }
    const imageDefault = {
        data: null,
        firstLoad: true,
        scale: 1
    }
    const [ status, setStatus ] = useState('show')
    const [ dialog, setDialog ] = useState(dialogDefault)
    const [ image, setImage ] = useState(imageDefault)

    let cropper = createRef()
    let file = createRef()

    const showDialog = () => {
        if(!image.data) {
            file.current.click()
        }
    }
    // Cancel Button Dialog
    const handleOnCancelDialog = () => {
        setDialog({ visible: false})
        setStatus('show')
        setImage(prevState => {
            return {
                ...prevState,
                scale: 1,
                data: null,
                firstLoad: true,
            }
        })
    }
    // Get Image from User
    const handleLoadImage = () => {
        setImage(prevState => {
            return {
                ...prevState,
                data: file.current.files[0]
            }
        })
        setDialog({ visible: true})
    }
    // First load image in cropper
    const firstLoadImage = () => {
        if(image.firstLoad) {
            setStatus('loading')
            setImage(prevState => {
                return {
                    ...prevState,
                    firstLoad: false
                }
            })
        }
    }
    // Upload Image
    const handleUploadImage = async () => {
        setStatus('loading')
        const canvas = cropper.current.getImage().toDataURL()
        let formData = new FormData()
        formData.append('image', base64toFile(canvas, 'png'))
        const options = {
            method: 'put',
            url: apiURL + address + `?token=${token}`,
            data: formData
        }
        let result = await axios(options)
        
        if(result.data.success) {
            setStatus('success')
            changeImage({
                [name]: result.data.data.fileName
            })
        } else {
            setStatus('error')
        }
    }
    // Convert base64 to file
    const base64toFile = (base64String, filename) => {
        let arr = base64String.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n)
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n)
        }
        return new File([u8arr], filename, {
            type: mime
        })
    }
    // ZoomIn and ZoomOut
    const handleOnWheel = e => {
        if (Math.sign(e.deltaY) == -1) {
            setImage(prevState => {
                return {
                    ...prevState,
                    scale: prevState.scale + 0.09
                }
            })
        } else {
            setImage(prevState => {
                return {
                    ...prevState,
                    scale: prevState.scale > 1 ? prevState.scale - 0.09 : 1
                }
            })
        }
    }

    return(
        <>
            <div className={styles.button} style={{fontSize: `${fontSize}rem`}} onClick={showDialog}>
                <i className='el-icon-upload2'></i>
            </div>
            <Dialog
                visible={dialog.visible}
                className={styles.dialog}
                size={size}
                onCancel = {handleOnCancelDialog}
                lockScroll={false}
            >
                <Dialog.Body className={classnames(styles.body,classes.flexCenter)}>
                    <input hidden type='file' ref={file} onChange={e => handleLoadImage(e)}/>
                    <AvatarEditor
                        onWheel={e => handleOnWheel(e)}
                        image={image.data}
                        style={{ 
                            visibility: status !== 'show' ? 'hidden' : 'visible',
                        }}
                        width={width}
                        height={height}
                        className={styles.cropper}
                        color={[255, 255, 255, 0.8]} 
                        scale={image.scale}
                        rotate={0}
                        border={0}
                        onImageChange={firstLoadImage}
                        onLoadSuccess={() => setStatus('show')}
                        onLoadFailure={() => setStatus('error')}
                        disableBoundaryChecks={false}
                        borderRadius={borderRadius}
                        ref={cropper}
                    />

                    { status === 'loading' && 
                        <div className={classnames(styles.statusContainer,classes.flexCenter)}>
                            <i className={classnames(styles.status,'el-icon-loading')}></i>
                        </div>}

                    { status === 'success' &&
                        <div className={classnames(
                            styles.statusContainer,
                            classes.flexCenter
                        )}>
                            <i className={classnames(
                                styles.status,
                                classes.success,
                                'el-icon-circle-check'
                            )}></i>
                        </div> }

                    { status === 'error' &&
                        <div className={classnames(
                            styles.statusContainer,
                            classes.flexCenter
                        )}>
                            <i className={classnames(
                                styles.status,
                                classes.error,
                                'el-icon-circle-cross'
                            )}></i>
                        </div> }
                       
                </Dialog.Body>
                <Dialog.Footer>
                    { status === 'show' ? 
                        <Button type='primary' style={{width: '100%'}} 
                        onClick = {handleUploadImage}>
                            {LABELS.sendButtonLabel}
                        </Button>
                        :
                        status !== 'loading' &&
                        <Button type='primary' style={{width: '100%'}} onClick={handleOnCancelDialog}>
                            {LABELS.okButtonLabel}
                        </Button>
                    }
                </Dialog.Footer>
            </Dialog>
        </>
    )
}

export default connect(state => ({
    token: state.myProfile.token
}))(UploadImage)