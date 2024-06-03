import "../styles/estate.scss";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../logements.json";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight
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
      return prevIndex < imgEstate.length - 1 ? prevIndex + 1 : prevIndex;
    });
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex > 0 ? prevIndex - 1 : prevIndex;
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
      <h2>{object.title}</h2>
      <p>{object.location}</p>
      <ul className="ul_tags">
        {object.tags.map((tag, index) => (
          <li key={`${tag}-${index}`}>{tag}</li>
        ))}
      </ul>
      <Button
        text={Description}
        div={<p className="ul_equipements">{object.description}</p>}
      />
      
      <Button
        text={Équipements}
        div={<ul className="ul_equipements">
        {object.equipments.map((equipment, index) => (
          <li key={`${equipment}-${index}`}>{equipment}</li>
        ))}
      </ul>}
      />
      
    </div>
  );
}

export default EstateCard;
