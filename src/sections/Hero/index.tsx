import { useAtom } from "jotai";
import { currentHeroSlideAtom } from "../../state/atoms";
import style from "./style.module.css";
import Logo from "../../assets/logo.png";
import scrollIcon from "../../assets/scroll-icon.png";
import slide1 from "../../assets/slides/1.png";
import slide2 from "../../assets/slides/2.png";
import slide3 from "../../assets/slides/3.png";
import slide4 from "../../assets/slides/4.png";
import slide5 from "../../assets/slides/5.png";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useAtom(currentHeroSlideAtom);

  const SLIDES = [
    { image: slide1 },
    { image: slide2 },
    { image: slide3 },
    { image: slide4 },
    { image: slide5 },
  ];

  return (
    <div className={style.hero}>
      <div
        className={style.background}
        style={{ transform: `translateY(calc(-${currentSlide} * 120vh))` }}
      >
        {SLIDES.map((slide, i) => (
          <img src={slide.image} key={i} alt={`Slide ${i + 1}`} />
        ))}
      </div>

      <div className={style.navbar}>
        <div className={style.logo}>
          <img src={Logo} alt="Logo" />
        </div>

        <div className={style.links}>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Knowledge Hub</a>
        </div>

        <div className={style.buttons}>
          <a href="#">Login</a>
          <a href="#">Subscribe</a>
        </div>

        <div className={style.languages}>
          <a href="#">A</a>
          <span className={style.separator}></span>
          <a href="#">E</a>
        </div>
      </div>

      <div className={style.content}>
        <span>Upcoming Book Fairs</span>
        <p>
          There are many reasons to join EPA. Become a member of our association today and gain knowledge and support from the Publishing industry.
        </p>
        <div>
          <a href="#">Explore</a>
        </div>
      </div>

      <div className={style.sliderControllers}>
        <ul>
          {SLIDES.map((slide, i) => (
            <li
              key={i}
              className={i === currentSlide ? style.active : undefined}
              onClick={() => setCurrentSlide(i)}
            ></li>
          ))}
        </ul>
      </div>

      <div className={style.scrollIcon}>
        <span className={style.scrollText}>SCROLL</span>
        <img src={scrollIcon} width={25} alt="Scroll Icon" />
      </div>
    </div>
  );
};

export default Hero;
