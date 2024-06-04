import data from "../logements.json";
import { Link } from "react-router-dom";
import "../styles/card.scss"

function Card() {
  return (
    <ul className="ul_card">
      {data.map((card) => (
        <li key={card.id}>
          <Link to={`/estate/${card.id}`}>
            <img src={card.cover} alt="logement" /> <p>{card.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default Card;
