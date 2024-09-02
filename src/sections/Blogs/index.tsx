import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import style from "./style.module.css";



const Card = () => {
  return (
    <div className='embla__slide'>
      <div className={`${style.card}`}>
        <a href="#">Read More</a>
        <span>Emirati Publishers Stress the Importance of AI In The Publishing</span>
      </div>
    </div>
  );
}

const Blogs = () => {


  const slides = Array (6).fill (1);
  const [emblaRef] = useEmblaCarousel({ containScroll: false })

  return (
    <div className={style.testimonials}>
      <span className={style.sectionTitle}>Blogs & News Room</span>
      <section className={style.embla}>
      <div className={style.embla__viewport} ref={emblaRef}>
        <div className={style.embla__container}>
          {slides.map((item, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </section>  
    </div>
  );

  // return (
  //   <div className={style.testimonials}>
  //     <div className={`embla`}>
  //       <div className='embla__container'>
  //         <Card />
  //         <Card />
  //         <Card />
  //         <Card />
  //         <Card />
  //       </div>
  //     </div>
  //   </div>
  // );

}

export default Blogs;