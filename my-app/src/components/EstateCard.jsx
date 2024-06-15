import "../styles/estate.scss";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../logements.json";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function findById(id) {
  return data.find((item) => item.id === id) || null;
}

function EstateCard() {
  const { id } = useParams();
  const object = findById(id);
  const imgEstate = object.pictures.map((picture) => picture);
  const [currentIndex, setCurrentIndex] = useState(0);
  const Description = "Description";
  const Équipements = "Équipements";

  const nextImage = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex < imgEstate.length - 1 ? prevIndex + 1 : 0;
    });
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex > 0 ? prevIndex - 1 : imgEstate.length - 1;
    });
  };

  return (
    <div className="EstateContainer">
      <div className="carousel">
        <button
          className="carousel__chevron carousel__chevron--left"
          onClick={prevImage}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <img
          src={imgEstate[currentIndex]}
          alt="logement"
          className="carousel__image"
        />
        <button
          className="carousel__chevron carousel__chevron--right"
          onClick={nextImage}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="div_responsive">
        <aside className="aside_left">
          <h2>{object.title}</h2>
          <p>{object.location}</p>
          <ul className="ul_tags">
            {object.tags.map((tag, index) => (
              <li key={`${tag}-${index}`}>{tag}</li>
            ))}
          </ul>
        </aside>

        <aside className="aside_faStar_host_responsive">
          <div className="div_faStar">
            <FontAwesomeIcon
              icon={faStar}
              className={object.rating > 0 ? "faStarRed" : ""}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={object.rating > 1 ? "faStarRed" : ""}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={object.rating > 2 ? "faStarRed" : ""}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={object.rating > 3 ? "faStarRed" : ""}
            />
            <FontAwesomeIcon
              icon={faStar}
              className={object.rating > 4 ? "faStarRed" : ""}
            />
          </div>
          <div className="div_host">
            <p>{object.host.name}</p>
            <img src={object.host.picture} alt="profil de l'host"></img>
          </div>
        </aside>
      </div>
      <div className="btn_flex">
        <Button
          text={Description}
          div={<p className="btn_hidden_text">{object.description}</p>}
        />

        <Button
          text={Équipements}
          div={
            <ul className="btn_hidden_text">
              {object.equipments.map((equipment, index) => (
                <li key={`${equipment}-${index}`}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default EstateCard;
