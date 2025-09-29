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
    document.title = `${Title}`;
    document.getElementById("favIcon").href = `${BASE_PATH}resources/images/Sweden512.png`;
    console.log(`${Title} ${Version}`);
    console.log("Window size: ", window.innerWidth, "x", window.innerHeight);
}

function categories() {
    var provincialCoatOfArms = new Category(CategoryTypes.ProvincialCoatOfArms, "Provincial coat of arms", CategorySvg[CategoryTypes.ProvincialCoatOfArms], "1", true);
    var flower = new Category(CategoryTypes.Flowers, "Flowers", CategorySvg[CategoryTypes.Flowers], "2", false);
    var fish = new Category(CategoryTypes.Fishes, "Fishes", CategorySvg[CategoryTypes.Fishes], "3", false);
    var chemicalElement = new Category(CategoryTypes.ChemicalElement, "Chemical elements", CategorySvg[CategoryTypes.ChecmicalElements], "4", false);
    
    game.categories.push(provincialCoatOfArms);
    game.categories.push(flower);
    game.categories.push(fish);
    game.categories.push(chemicalElement);

    //addDebugCategories(0); // Use this to test how many categories can be displayed before the vertical scrollbar appears.
}

function addDebugCategories(numberOfCategories) {
    // Note: Use this only for testing how many categories can be displayed before the vertical scrollbar appears.

    for (let i = 0; i < numberOfCategories; i++) {
        var debugCategory = new Category(CategoryTypes.ProvincialCoatOfArms, `Debug ${i}`, CategorySvg[CategoryTypes.ProvincialCoatOfArms], `${i}`, false);
        game.categories.push(debugCategory);
    }
}