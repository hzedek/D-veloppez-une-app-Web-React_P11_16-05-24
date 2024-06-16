import EstateCard from "../components/EstateCard";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import data from "../logements.json";

/*Fonction qui regarde si l'id de l'url est dans le système si il ne l'est pas il
remplace la nvigation par "/404"*/

function Estate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [estate, setEstate] = useState(null);

  useEffect(() => {
    const validateId = () => {
      const estateData = data.find((item) => item.id === id);
      if (!estateData) {
        navigate("/404", { replace: true });
      } else {
        setEstate(estateData);
      }
    };

    validateId();
  }, [id, navigate]);

  if (!estate) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <EstateCard />
    </Fragment>
  );
}

export default Estate;
