import company1 from "../../assets/companies/1.png";
import company2 from "../../assets/companies/2.png";
import company3 from "../../assets/companies/3.png";
import company4 from "../../assets/companies/4.png";
import company5 from "../../assets/companies/5.png";
import company6 from "../../assets/companies/6.png";
import company7 from "../../assets/companies/7.png";
import company8 from "../../assets/companies/8.png";
import company9 from "../../assets/companies/9.png";
import company10 from "../../assets/companies/10.png";
import style from "./style.module.css";

const Company = ({ url }: { url: string }) => {
  return (
    <div>
      <img src={url} />
    </div>
  );
}

const Companies = () => {

  const companies = [
    { image: company1 },
    { image: company2 },
    { image: company3 },
    { image: company4 },
    { image: company5 },
    { image: company6 },
    { image: company7 },
    { image: company8 },
    { image: company9 },
    { image: company10 },
  ];

  return (
    <div className={style.testimonials}>
      <span className={style.sectionTitle}>Companies</span>
      <div className={style.companies}>
        { companies.map ((c) => <Company url={c.image} />) }
        {/* <Company url={"https://placehold.co/200x200/FF0000/000000/png"} /> */}
      </div>
    </div>
  );

}

export default Companies;