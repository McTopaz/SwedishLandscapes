import { CategoryTypes } from "../entities/constants/categoryTypes.js";
import { BASE_PATH } from "../entities/models/urlPaths.js";

export const CategorySvg = {
  [CategoryTypes.ProvincialCoatOfArms]: `${BASE_PATH}views/resources/images/svg/Shield.svg`,
  [CategoryTypes.Flowers]: `${BASE_PATH}views/resources/images/svg/Flower.svg`,
  [CategoryTypes.Fishes]: `${BASE_PATH}views/resources/images/svg/Fish.svg`,
  [CategoryTypes.ChecmicalElements]: `${BASE_PATH}views/resources/images/svg/ChemicalElement.svg`,
};
