import React,{ useState, useEffect } from 'react'
import styles from './home.module.css'
import VideoCard from '../../components/items/VideoCard/VideoCard'
import db from '../../utils/helpers/firebase'

function Home() {
  const [reels, setReels] = useState([])
  useEffect(() => {
    db.collection('reels').onSnapshot(snapshot =>
      setReels(snapshot.docs.map(doc => doc.data())
    ))
  }, [])
  return (
    <div className={styles.container}>
        <div className={styles.videoContainer}>
          {
            reels.map(({channel, avatarSrc, song, url, likes, shares}) =>
              <VideoCard 
                channel={channel}
                avatarSrc={avatarSrc}
                song={song}
                url={url}
                likes={likes}
                shares={shares} />
            )
          }
        </div>
    </div>
  )
}

export default Home