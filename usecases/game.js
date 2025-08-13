import { game } from "../entities/models/game.js";
import { CategoryTypes } from "../entities/constants/categoryTypes.js";
import { provincialCoatOfArms } from "../infrastructure/landscapesMapping/provincialCoatOfArms.js";
import { chemicalElements } from "../infrastructure/landscapesMapping/chemicalElements.js";

export function prepareGame() {
    var allItems = [];

    for (const category of game.Categories.filter(c => c.IsSelected)) {
        const landscapeData = fetchLandscapeDataForCategory(category);
        allItems = allItems.concat(landscapeData);
    }

    game.numberOfItems = allItems.length;
    game.Landscapes = allItems.sort(() => Math.random() - 0.5);
}

function fetchLandscapeDataForCategory(category) {
    if (category.Type == CategoryTypes.ProvincialCoatOfArms) {
        return provincialCoatOfArms;
    }
    else if (category.Type == CategoryTypes.ChecmicalElements) {
        return chemicalElements;
    }
}

export function getNextLandscape() {
    if (!game.Landscapes || game.Landscapes.length === 0) return null;
    return game.Landscapes[0];
}

export function onCorrectAnswer() {
    if (game.Landscapes && game.Landscapes.length > 0) {
        game.Landscapes.shift();
    }
}

export function onIncorrectAnswer() {
    if (game.Landscapes && game.Landscapes.length > 0) {
        const item = game.Landscapes.shift();
        game.Landscapes.push(item);
    }
}

