import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import Button from "../UI/Button/Button";

import {
  HeroContainerStyled,
  HeroFormStyled,
  HeroSearchBarStyled,
  IconWrapperStyled,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroContainerStyled>
      <div>
        <h1 className="title">¿Qué categoría estás buscando?</h1>
        <HeroFormStyled>
          <HeroSearchBarStyled
            type="text"
            placeholder="Ej. Pizzas a la piedra"
          />
          <IconWrapperStyled>
            <AiOutlineSearch />
          </IconWrapperStyled>
          <Button
            onClick={(e) => e.preventDefault()}
            radius="10"
            disabled="true"
          >
            Buscar
          </Button>
        </HeroFormStyled>
      </div>
      <div>
        <img
          height="500px"
          src="https://static.wixstatic.com/media/c837a6_8abd90a25be34a758931e215516dbd7f~mv2.png/v1/crop/x_1756,y_452,w_3479,h_3461/fill/w_1096,h_1080,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/new%20first%20fold.png"
          alt="hero-img"
        />
      </div>
    </HeroContainerStyled>
  );
};

export default Hero;
