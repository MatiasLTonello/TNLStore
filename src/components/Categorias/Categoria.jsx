import React from "react";
import { Stack } from "@mui/material";

import { BorderDecoration, CardCategoria } from "./CategoriasStyles";

export const Categoria = ({ img, title }) => {
  return (
    <Stack w={"100%"} height="100%">
      <CardCategoria
        selected={false}
        onClick={(e) => e.preventDefault()}
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
