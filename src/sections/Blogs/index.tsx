import useEmblaCarousel from 'embla-carousel-react'
import style from "./style.module.css";
import blog1 from "../../assets/blogs/1.png"
import blog2 from "../../assets/blogs/2.png"
import blog3 from "../../assets/blogs/3.png"



const Card = ({ image }: any) => {
  return (
    <div className='embla__slide' style={{ backgroundImage: `url(${image})` }}>
      <div className={`${style.card}`}>
        <a href="#">Read More</a>
        <span>Emirati Publishers Stress the Importance of AI In The Publishing</span>
      </div>
    </div>
  );
}

const Blogs = () => {


  const slides = [
    {
      image: blog1,
    },
    {
      image: blog2,
    },
    {
      image: blog3,
    },
    {
      image: blog2,
    }
  ]
  const [emblaRef] = useEmblaCarousel({ containScroll: false })

  return (
    <div className={style.testimonials}>
      <span className={style.sectionTitle}>Blogs & News Room</span>
      <section className={style.embla}>
      <div className={style.embla__viewport} ref={emblaRef}>
        <div className={style.embla__container}>
          {slides.map((item, index) => (
            <Card key={index} image={item.image} />
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