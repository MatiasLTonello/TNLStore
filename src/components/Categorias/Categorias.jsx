import React from "react";

import Categoria from "./Categoria";
import { CategoriasContainer } from "./CategoriasStyles";
import { useSelector } from "react-redux";

const Categorias = () => {
  const { selectedCategory, categories } = useSelector(
    (state) => state.categories
  );
  console.log(categories);
  return (
    <CategoriasContainer>
      {categories.map((category) => (
        <Categoria key={category.id} {...category}></Categoria>
      ))}
    </CategoriasContainer>
  );
};

export default Categorias;
