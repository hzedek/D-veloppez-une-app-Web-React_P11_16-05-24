import ImgBanner from "../assets/displayBanner.jpg";
import "../styles/BodyIndex.scss";
import Display from "./BannerContainer";
import Card from "./Card";

function DisplayBanner() {
  const Titre = "Chez vous, Partout et ailleurs";
  return (
    <div className="div_bodyIndex">
      <Display image={ImgBanner} />
      <p>{Titre}</p>
    </div>
  );
}

function BodyIndex() {
  return (
    <div className="body-banner">
      <DisplayBanner />
      <Card />
    </div>
  );
}

export default BodyIndex;
