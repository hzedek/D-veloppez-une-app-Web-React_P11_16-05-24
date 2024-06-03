import "../styles/estate.scss";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../logements.json";
import Button from "./Button";

function findById(id) {
  return data.find((item) => item.id === id) || null;
}

function EstateCard() {
  const { id } = useParams();
  const object = findById(id);
  const imgEstate = object.cover;
  const Description = "Description";
  const Équipements = "Équipements";
  const [equipementisOpen, E_setIsOpen] = useState(false);
  const [descriptionisOpen, D_setIsOpen] = useState(false);

  return (
    <div className="EstateContainer">
      <img src={imgEstate} alt="logement" />
      <h2>{object.title}</h2>
      <p>{object.location}</p>
      <ul className="ul_tags">
        {object.tags.map((tag, index) => (
          <li key={`${tag}-${index}`}>{tag}</li>
        ))}
      </ul>
      <Button text={Description} onClick={() => D_setIsOpen(!descriptionisOpen)}/>
      {descriptionisOpen && (<p className="ul_equipements">{object.description}</p>)}
      <Button text={Équipements} onClick={() => E_setIsOpen(!equipementisOpen)}/>
      {equipementisOpen && (
      <ul className="ul_equipements">
        {object.equipments.map((equipment, index) => (
          <li key={`${equipment}-${index}`}>{equipment}</li>
        ))}
      </ul>)}
    </div>
  );
}

export default EstateCard;
