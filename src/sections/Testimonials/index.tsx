// import video from "../../assets/videos/video.mp4";
import thumbnail from "../../assets/thumbnail.webp"
import style from "./style.module.css";


const Testimonials = () => {

  return (
    <div className={style.testimonials}>
      <span className={style.sectionTitle}>Client Testimonial</span>
      <div className={style.video}>
        <img src={thumbnail} alt="" />
      </div>
    </div>
  );

}

export default Testimonials;