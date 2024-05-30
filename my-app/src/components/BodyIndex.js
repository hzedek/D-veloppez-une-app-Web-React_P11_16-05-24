import ImgBanner from "../assets/displayBanner.jpg";
import "../styles/BodyIndex.scss";
import data from "../logements.json";
import Display from "./BannerContainer";

function DisplayBanner() {
  const Titre = "Chez vous, Partout et ailleurs";
  return (
    <div>
      <Display image={ImgBanner} />
      <p>{Titre}</p>
    </div>
  );
}
function CardLocation() {
  return (
    <ul>
      {data.map((card) => (
        <li key={card.id}>
          <img src={card.cover} alt="logement" /> <p>{card.title}</p>
        </li>
      ))}
    </ul>
  );
}

function BodyIndex() {
  return (
    <div className="body-banner">
      <DisplayBanner />
      <CardLocation />
    </div>
  );
}

export default BodyIndex;
