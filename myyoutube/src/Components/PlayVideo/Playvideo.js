import React, { useEffect, useState } from 'react'
import './Playvideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../Data'
import moment from 'moment'



export default function Playvideo({videoId}) {
    const [apiData,setApiData]=useState(null);
    const[channelData,setChannelData]=useState(null);

    const fetchVideoData=async()=>{
        //fetching Videos Data
        const videoDeatils_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDeatils_url).then(res=>res.json()).then(data=>setApiData(data.items[0]));
    }
    const fetchOtherData=async()=>{
        //Featching channel data

    const channelData_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]))
    }

    useEffect(()=>{
        fetchVideoData();
    },[])

    useEffect(()=>{
        fetchOtherData();
    },[apiData])

  return (
    <div className='play-video'>
       {/*<video src={video1} controls autoPlay muted></video>*/}
       <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
        <div className='play-video-info'>
            <p>{apiData?value_converter(apiData.statistics.viewCount):"16K"} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
            <div>
                <span><img src={like} alt=''/>{apiData?value_converter(apiData.statistics.likeCount):155}</span>
                <span><img src={dislike} alt=''/>5</span>
                <span><img src={share} alt=''/>80</span>
                <span><img src={save} alt=''/>35</span>
            </div>
        </div>
      <hr/>
      <div className='publisher'>
        <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt=''/>
        <div>
        <p>{apiData?apiData.snippet.channelTitle:""}</p>
      <span>{channelData?channelData.statistics.subscriberCount:"1M"}Subscriber</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className='vid-description'>
        <p>{apiData?apiData.snippet.description.slice(0,250):"Description Here"}</p>
        <p>Subscribe PkStudio to watch More Videos on Web devlopment</p>
        <hr/>
        <h4>{apiData?value_converter(apiData.statistics.commentCount):102}Comments</h4>
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
