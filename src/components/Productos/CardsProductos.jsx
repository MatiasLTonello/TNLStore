import CardProducto from "./CardProducto";
import Button from "../UI/Button/Button";

import { ProductosContainer } from "./CardsProductosStyles";
import { ButtonContainerStyled } from "../../pages/Home/HomeStyles";
import { Products } from "../../data";
import { useSelector } from "react-redux";

const CardsProductos = () => {
  const { selectedCategory } = useSelector((store) => store.categories);
  const { products } = useSelector((store) => store.products);
  return (
    <>
      <ProductosContainer>
        {Object.entries(products).map(([_category, foods]) =>
          _category === selectedCategory || !selectedCategory
            ? foods.map((food) => (
                <CardProducto key={food.id} {...food}></CardProducto>
              ))
            : []
        )}
      </ProductosContainer>

      <ButtonContainerStyled>
        <Button
          onClick={(e) => e.preventDefault()}
          secondary="true"
          disabled="true"
        >
          <span>Ver menos</span>
        </Button>
        <Button onClick={(e) => e.preventDefault()} disabled="true">
          Ver más
        </Button>
      </ButtonContainerStyled>
    </>
  );
};

export default CardsProductos;
