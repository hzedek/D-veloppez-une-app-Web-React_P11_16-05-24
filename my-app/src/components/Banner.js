import logo from "../assets/logo.png";

function ImgLogo() {
    return <img src={logo} alt="logo"></img> 
}
function Nav() {
 return <div><a href="index.html">Accueil</a><a href="apropos.html">A Propros</a>
</div>
}

function Banner() {
    return <header><ImgLogo /><Nav /></header> 
}
export default Banner