import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { categoriesReducer } from "./categories/categories-reducer";
import { productsReducer } from "./products/products-reducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});

export default persistReducer(
  {
    key: "global",
    storage,
    whitelist: [],
  },
  rootReducer
);
