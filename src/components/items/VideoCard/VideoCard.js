import React,{ useState, useRef } from 'react'
import styles from './videoCard.module.css'
import VideoCardHeader from '../VideoCardHeader/VideoCardHeader';
import VideoCardFooter from '../VideoCardFooter/VideoCardFooter';

function VideoCard({channel, avatarSrc, song, url, likes, shares}) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleOnVideoPlayerClick = () => {
        if(isVideoPlaying) {
            videoRef.current.pause();
            setIsVideoPlaying(false);
        } else {
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    };

    return (
        <div className={styles.container}>
            <VideoCardHeader />
            <video
                ref={videoRef}
                onClick={handleOnVideoPlayerClick}
                className={styles.videoPlayer}
                src={url}
                alt='video player' 
                loop
                autoPlay
            />
            <VideoCardFooter 
                channel={channel}
                avatarSrc={avatarSrc}
                song={song}
                likes={likes}
                shares={shares}
            />
        </div>
  )
}

export default VideoCard