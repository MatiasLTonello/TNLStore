import React from "react";

import CardRecomendacion from "./CardRecomendacion";

import { CardsContainer } from "./CardsRecomendacionStyled";
import { Recommended } from "../../data";

const CardsRecomendacion = () => {
  return (
    <CardsContainer gridLength={4}>
      {Recommended.map((product) => (
        <CardRecomendacion key={product.id} {...product}></CardRecomendacion>
      ))}
    </CardsContainer>
  );
};

export default CardsRecomendacion;
