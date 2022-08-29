import React from 'react';
import '../../App.css';
import video from '../video/video.MP4';

export default function Video() {
    return (
    <div>
    <h3 className='video'>Ve nuestro vídeo</h3>
    <video src={video}/>
    </div>
    )
}