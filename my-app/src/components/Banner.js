import logo from "../assets/logo.png";
import '../styles/Banner.scss'

function ImgLogo() {
    return <img src={logo} alt="logo"></img> 
}
function Nav() {
 return <nav><a href="index.html">Accueil</a><a href="apropos.html">A Propros</a>
</nav>
}

function Banner() {
    return <header><ImgLogo /><Nav /></header> 
}
export default Banner