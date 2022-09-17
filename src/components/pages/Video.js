import React from 'react';
import '../../App.css';
import video from '../video/video.MP4';
import '../HeroSection.css';

export default props => {
  return (
  <div className="video">
    <video width="500" height="420" controls>
    <source src={video} type="video/mp4" />
    </video>
  </div>
  );
};
