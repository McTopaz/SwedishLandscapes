import { Title, Version } from "../entities/constants/game.js";
import { game } from "../entities/models/game.js";
import { Category } from "../entities/models/category.js";
import { CategoryTypes } from "../entities/constants/categoryTypes.js"
import { CategorySvg } from "../infrastructure/categorySvg.js"; // ToDo: Should not be imported here.

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
}

function categories() {
    var weapon = new Category(CategoryTypes.Weapon, "Weapon", CategorySvg[CategoryTypes.Weapon], "1");
    var flower = new Category(CategoryTypes.Flower, "Flowers", CategorySvg[CategoryTypes.Flowes], "2");
    var fish = new Category(CategoryTypes.Fish, "Fishes", CategorySvg[CategoryTypes.Fishes], "3");
    var chemicalElement = new Category(CategoryTypes.ChemicalElement, "Chemical elements", CategorySvg[CategoryTypes.ChecmicalElements], "4");
    
    game.Categories.push(weapon);
    game.Categories.push(flower);
    game.Categories.push(fish);
    game.Categories.push(chemicalElement);
}