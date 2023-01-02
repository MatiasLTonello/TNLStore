import { Categories } from "../../data";

const INITIAL_STATE = {
  categories: Categories,
  selectedCategory: null,
};

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "":
    case "":
    default:
      return state;
  }
};
