import { Title, Version } from "../entities/constants/game.js";
import { game } from "../entities/models/game.js";
import { Category } from "../entities/models/category.js";
import { CategoryTypes } from "../entities/constants/categoryTypes.js"
import { CategorySvg } from "../infrastructure/categorySvg.js"; // ToDo: Should not be imported here.
import { BASE_PATH } from "../entities/models/urlPaths.js";

export function initializeApp() {
    setup();
    categories();
}

function setup() {
    document.title = `${Title} - V${Version}`;

    const footer = document.getElementById("footer");
    if (footer) {
        footer.textContent = `Version: ${Version}`;
    }

    document.getElementById("favIcon").href = `${BASE_PATH}resources/images/Sweden512.png`;
}

function categories() {
    var provincialCoatOfArms = new Category(CategoryTypes.ProvincialCoatOfArms, "Provincial coat of arms", CategorySvg[CategoryTypes.ProvincialCoatOfArms], "1", true);
    var flower = new Category(CategoryTypes.Flower, "Flowers", CategorySvg[CategoryTypes.Flowers], "2", false, true);
    var fish = new Category(CategoryTypes.Fish, "Fishes", CategorySvg[CategoryTypes.Fishes], "3", false, true);
    var chemicalElement = new Category(CategoryTypes.ChemicalElement, "Chemical elements", CategorySvg[CategoryTypes.ChecmicalElements], "4", false);
    
    game.Categories.push(provincialCoatOfArms);
    game.Categories.push(flower);
    game.Categories.push(fish);
    game.Categories.push(chemicalElement);
}