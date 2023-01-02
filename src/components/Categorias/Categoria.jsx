import React from "react";
import { Stack } from "@mui/material";

import { BorderDecoration, CardCategoria } from "./CategoriasStyles";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/categories/categories-actions";

export const Categoria = ({ img, title, id, category }) => {
  console.log(title);
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector((state) => state.categories);
  return (
    <Stack w={"100%"} height="100%">
      <CardCategoria
        selected={selectedCategory === category}
        onClick={(e) => dispatch(selectCategory(category))}
        whileTap={{ scale: 0.95 }}
      >
        <Stack minWidth="20%" height="80px">
          <img
            src={img}
            alt={title}
            widht="100%"
            height={"100%"}
            object-fit="cover"
          />
        </Stack>

        <h2>{title}</h2>
        <BorderDecoration></BorderDecoration>
      </CardCategoria>
    </Stack>
  );
};

export default Categoria;
