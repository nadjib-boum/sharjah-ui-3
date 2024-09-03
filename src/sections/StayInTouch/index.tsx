import a from "../../assets/a.png";
import style from "./style.module.css"

const StayInTouch = () => {

  return (
    <div className={style.discover}>
      <div className={style.content}>
        <span>Stay in touch</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut , aliqua, ut enim ad minim veniaenim ad minim veniam. Sed do eiusmod tempor incididunt ut labore </p>
          <div className={style.links}>
          <a href="#">Sign up</a>
          {/* <a href="#" id={style.active}>Read More</a> */}
        </div>
      </div>
      <div className={style.image}>
        <img src={a} />
      </div>
    </div>
  );

}

export default StayInTouch;