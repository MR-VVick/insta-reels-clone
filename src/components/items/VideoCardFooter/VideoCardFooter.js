import React from 'react'
import { Avatar, Button } from '@mui/material'
import styles from './videoCardFooter.module.css'
import { Favorite, ModeComment, MoreHoriz, MusicNote, Send } from '@mui/icons-material'

function VideoCardFooter({channel, avatarSrc, song, likes, shares}) {
  return (
    <div className={styles.container}>
      <div className={styles.avatarButtonContainer}>
        <Avatar className={styles.avatar} src={avatarSrc}/>
        <h3>
          {channel} • <Button>Follow</Button>
        </h3>
      </div>
      {/* <div className={styles.tickerContainer}>
        <MusicNote className={styles.tickerIcon}/>
        <div className={styles.ticker}>
          <Ticker mode='smooth'>
            {({ index }) => (
              <>
                <h1>{song}</h1>
              </>
            )}
          </Ticker>
        </div>
      </div> */}
      <div className={styles.actionsContainer}>
        <div className={styles.actionsContainerLeft}>
          <Favorite className={styles.icon}/>
          <ModeComment className={styles.icon}/>
          <Send className={styles.icon}/>
          <MoreHoriz className={styles.icon}/>
        </div>
        <div className={styles.actionsContainerRight}>
          <div className={styles.status}>
              <Favorite className={styles.icon}/>
              <p className={styles.actionRightText}>{likes}</p>
          </div>
          <div className={styles.status}>
              <ModeComment className={styles.icon}/>
              <p className={styles.actionRightText}>{shares}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCardFooter