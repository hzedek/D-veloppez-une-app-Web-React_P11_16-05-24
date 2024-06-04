import logo from "../assets/logo.png";
import "../styles/Banner.scss";
import { Link } from 'react-router-dom'

function ImgLogo() {
  return <img src={logo} alt="logo"></img>;
}
function Nav() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/Apropos">A Propros</Link>
    </nav>
  );
}

function Banner() {
  return (
    <header>
      <ImgLogo />
      <Nav />
    </header>
  );
}
export default Banner;
