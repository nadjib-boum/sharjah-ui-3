import discover from "../../assets/discover.png";
import style from "./style.module.css"

const Discover = () => {

  return (
    <div className={style.discover}>
      <div className={style.content}>
        <span>Discover who we are</span>
        <p>Established on February 25, 2009, the Emirates Publishers Association is a non-profit organisation that serves the United Arab Emirates (UAE) by working to develop the UAE’s publishing industry.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <div className={style.links}>
          <a href="#">Read More</a>
          <a href="#" id={style.active}>Read More</a>
        </div>
      </div>
      <div className={style.image}>
        <img src={discover} />
      </div>
    </div>
  );

}

export default Discover;