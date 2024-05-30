import data from "../logements.json";
import { Link } from "react-router-dom";

function Card() {
  return (
    <ul>
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
