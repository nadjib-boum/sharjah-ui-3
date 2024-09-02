import style from "./style.module.css";
import event1 from "../../assets/events/1.png";
import event2 from "../../assets/events/2.png";
import event3 from "../../assets/events/3.png";
import defaultEvent from "../../assets/events/default-event.png"
import plume from "../../assets/plume.png"
import { useState } from "react";

const Event = ({ title, desc, image, index }: any) => {

  const [ currentImg, setCurrentImg ] = useState (image);

  const handleMouseIn = () => {
    setCurrentImg (defaultEvent);
  } 

  const handleMouseOut = () => {
    setCurrentImg (image);
  } 

  return (
    <div className={style.event}>
      <div className={style.eventText}>
        <span>{title}</span>
        <p>{desc}</p>
      </div>
      <div className={style.dot}>{index + 1}</div>
      <div className={style.image}>
        <img src={currentImg} onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut} />
      </div>
    </div>
  );
}

const Events = () => {

  const events = [
    {
      title: "UAE Books Event",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore",
      image: event1
    },
    {
      title: "UAE Books Event",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore",
      image: event2
    },
    {
      title: "UAE Books Event",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore",
      image: event3
    },
    {
      title: "UAE Books Event",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore",
      image: event1
    },
    {
      title: "UAE Books Event",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore",
      image: event2
    },
  ];

  return (
    <div className={style.events}>
      <div className={style.text}>
        <div className={style.title}>
          Events Calendar
        </div>
        <div className={style.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolor
        </div>
      </div>
      <div className={style.eventList}>
        <div className={style.line}>
          <div className={style.progress}>
            <img src={plume} />
          </div>
        </div>
        <div className={style.wrapper}>
          { events.map ((e, index) => <Event title={e.title} desc={e.desc} image={e.image} index={index} />) }
        </div>
      </div>
    </div>
  );

}

export default Events;