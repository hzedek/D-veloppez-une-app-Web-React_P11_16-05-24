import "../styles/Footer.scss";
import LogoFooter from "../assets/logo_footer.png";

function Footer() {
  return (
    <footer>
      <img src={LogoFooter} alt="" />
      <p className="p-Icon">©</p><p>2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
