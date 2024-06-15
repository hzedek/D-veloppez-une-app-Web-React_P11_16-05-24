import logo from "../assets/logo.png";
import "../styles/Banner.scss";
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function ImgLogo() {
  return <img src={logo} alt="logo"></img>;
}
function Nav() {
  const location = useLocation();
  return (
    <nav>
      <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Accueil</Link>
      <Link to="/Apropos" className={location.pathname === '/Apropos' ? 'nav-link active' : 'nav-link'}>A Propros</Link>
    </nav>
  );
}

function Header() {
  return (
    <header>
      <ImgLogo />
      <Nav />
    </header>
  );
}
export default Header;
