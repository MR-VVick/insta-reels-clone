import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import styles from './videoCardHeader.module.css'

function VideoCardHeader() {
  return (
    <div className={styles.container}>
        <ArrowBackIosIcon />
        <h3>Reels</h3>
        <CameraAltOutlinedIcon />
    </div>
  )
}

export default VideoCardHeader