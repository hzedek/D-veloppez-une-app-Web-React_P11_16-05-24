import DisplayBanner from "../assets/displayBanner.jpg";
import "../styles/BodyIndex.scss";
import data from "../logements.json";

function Display() {
  const Titre = "Chez vous, Partout et ailleurs";
  return (
    <div>
      <img src={DisplayBanner} alt="bannière" />
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
      <Display />
      <CardLocation />
    </div>
  );
}

export default BodyIndex;
