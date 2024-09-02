import { useState, useEffect, useRef, useCallback } from "react";
import style from "./style.module.css";
import arrow from "../../assets/arrow-icon.png"
import video from "../../assets/videos/video.mp4"


const Activity = ({ activity, video }: any) => {

  return (
    <div className={style.activityCard}>
      {video}
      <div className={style.activityOverlay }>
        <span>{activity.title}</span>
        <a href="#">
          <span>Discover More</span>
          <img src={arrow} />
        </a>
      </div>
    </div>
  );
}

const WhatWeDo = () => {

  const activities = [
    { title: 'Consultancy', video },
    { title: 'Design Workshops', video },
    { title: 'Publishing Legalities', video },
    { title: 'Industry Insights', video },
  ];

  const [activeVideo, setActiveVideo] = useState(0);
  const videoRefs = useRef<any>([]);

  useEffect(() => {
    if (videoRefs.current[0]) {
      videoRefs.current[0].play();
    }
  }, []);

  const handleMouseEnter = ((index: number) => {

    if (index !== activeVideo && videoRefs.current[index]) {
      videoRefs.current[index].play();
      if (videoRefs.current[activeVideo]) {
        videoRefs.current[activeVideo].pause();
        setActiveVideo(index);
      }
    }

  });

  const handleMouseLeave = ((index: number) => {

    if (videoRefs.current[index]) videoRefs.current[index].pause();
      
    // if (index !== 0 && videoRefs.current[0]) {
    //   videoRefs.current[0].play();
    //   setActiveVideo(index);
    // }

  });

  return (
    <div className={style.whatWeDo}>
      <div className={style.textSection}>
        <h2>What We Do</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Ipsum dolor sit
          amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
        </p>
      </div>
      <div className={style.activitiesGrid}>
        {activities.map((activity, index) => (
          <Activity 
            key={index}
            activity={activity}
            index={index}
            video={
              <video
                key={index}
                ref={(el) => (videoRefs.current[index] = el)}
                src={activity.video} // Replace with your video sources
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                muted // Optional: to avoid autoplay sound
                controls={false} // Hide default controls
                loop={true}
                crossOrigin="anonymous"
              />
            }
          />
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;