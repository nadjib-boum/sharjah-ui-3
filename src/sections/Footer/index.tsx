import Logo from "../../assets/logo.png";
import style from './style.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.content}>
        <div className={style.info}>
          <div className={style.logo}>
            <img src={Logo} />
          </div>
          <p className={style.companyDescription}>
            We're a team of experienced designers,
            developers, and marketers, passionate about
            delivering exceptional digital solutions.
          </p>
          <p className={style.email}>info@epa.org.ae</p>
        </div>
        <nav className={style.footerNav}>
          <div className={style.navColumn}>
            <a href="/">Home</a>
            <a href="/cultural-inactivates">Cultural Inactivates</a>
            <a href="/about-us">About Us</a>
            <a href="/calendar">Calendar</a>
            <a href="/contact">Contact</a>
          </div>
          <div className={style.navColumn}>
            <a href="/faq">FAQ</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
          </div>
        </nav>
      </div>
      <div className={style.copy}>
          © 2024 Emirates Publishers Association
        </div>
    </footer>
  );
};

export default Footer;