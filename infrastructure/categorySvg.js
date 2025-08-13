import { CategoryTypes } from "../entities/constants/categoryTypes.js";
import { BASE_PATH } from "../entities/models/urlPaths.js";

export const CategorySvg = {
  [CategoryTypes.ProvincialCoatOfArms]: `${BASE_PATH}resources/images/svg/Shield.svg`,
  [CategoryTypes.Flowers]: `${BASE_PATH}resources/images/svg/Flower.svg`,
  [CategoryTypes.Fishes]: `${BASE_PATH}resources/images/svg/Fish.svg`,
  [CategoryTypes.ChecmicalElements]: `${BASE_PATH}resources/images/svg/ChemicalElement.svg`,
};
