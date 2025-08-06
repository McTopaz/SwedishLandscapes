import { Title, Version } from "../entities/constants/game.js";
import { game } from "../entities/models/game.js";
import { Category } from "../entities/models/category.js";

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
    var weapon = new Category("Vapen", "/views/resources/images/svg/Shield.svg", "1");
    var flower = new Category("Blommor", "/views/resources/images/svg/Flower.svg", "2");
    var fish = new Category("Fiskar", "/views/resources/images/svg/Fish.svg", "3");
    var chemicalElement = new Category("Chemical element", "/views/resources/images/svg/ChemicalElement.svg", "4");
    
    game.Categories.push(weapon);
    game.Categories.push(flower);
    game.Categories.push(fish);
    game.Categories.push(chemicalElement);
}