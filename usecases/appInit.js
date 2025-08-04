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
    var weapon = new Category("Vapen", "weapon", "1");

    game.Categorys.push(weapon);
}