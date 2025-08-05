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
    var weapon = new Category("Vapen", "/views/icons/Shield.svg", "1");
    var flower = new Category("Blommor", "/views/icons/Flower.svg", "2");
    var fish = new Category("Fiskar", "/views/icons/Fish.svg", "3");
    
    game.Categories.push(weapon);
    game.Categories.push(flower);
    game.Categories.push(fish);
}