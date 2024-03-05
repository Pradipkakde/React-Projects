import React from 'react'
import './Playvideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'


export default function Playvideo() {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted></video>
        <h3>Best YouTube channel to Learn Web Devlopment</h3>
        <div className='play-video-info'>
            <p>1525 Views &bull; 2 days ago</p>
            <div>
                <span><img src={like} alt=''/>125</span>
                <span><img src={dislike} alt=''/>5</span>
                <span><img src={share} alt=''/>80</span>
                <span><img src={save} alt=''/>35</span>
            </div>
        </div>
      <hr/>
      <div className='publisher'>
        <img src={jack} alt=''/>
        <div>
        <p>PkStudio</p>
      <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className='vid-description'>
        <p>Channel that makes learning Easy</p>
        <p>Subscribe PkStudio to watch More Videos on Web devlopment</p>
        <hr/>
        <h4>130 Comments</h4>
        <div className='comments'>
            <img src={user_profile} alt=''/>
            <div>
                <h3>Pradip kake<span> 2 day ago</span></h3>
                <p>A global computer newtowrk providing a varitey of information.</p>
                <div className='comment-action'>
                    <img src={like} alt=''/>
                    <span>244</span>
                    <img src={dislike} alt=''/>
                </div>
            </div>

        </div>
        <div className='comments'>
            <img src={user_profile} alt=''/>
            <div>
                <h3>Pradip kake<span> 2 day ago</span></h3>
                <p>A global computer newtowrk providing a varitey of information.</p>
                <div className='comment-action'>
                    <img src={like} alt=''/>
                    <span>244</span>
                    <img src={dislike} alt=''/>
                </div>
            </div>

        </div>
        <div className='comments'>
            <img src={user_profile} alt=''/>
            <div>
                <h3>Pradip kake<span> 2 day ago</span></h3>
                <p>A global computer newtowrk providing a varitey of information.</p>
                <div className='comment-action'>
                    <img src={like} alt=''/>
                    <span>244</span>
                    <img src={dislike} alt=''/>
                </div>
            </div>

        </div>
        <div className='comments'>
            <img src={user_profile} alt=''/>
            <div>
                <h3>Pradip kake<span> 2 day ago</span></h3>
                <p>A global computer newtowrk providing a varitey of information.</p>
                <div className='comment-action'>
                    <img src={like} alt=''/>
                    <span>244</span>
                    <img src={dislike} alt=''/>
                </div>
            </div>

        </div>
      </div>
      
    </div>

  )
}
