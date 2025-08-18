import { game } from "../entities/models/game.js";
import { CategoryTypes } from "../entities/constants/categoryTypes.js";
import { provincialCoatOfArms } from "../infrastructure/landscapesMapping/provincialCoatOfArms.js";
import { flowers } from "../infrastructure/landscapesMapping/flowers.js";
import { chemicalElements } from "../infrastructure/landscapesMapping/chemicalElements.js";

export function prepareGame() {
    var allItems = [];

    for (const category of game.categories.filter(c => c.IsSelected)) {
        const landscapeData = fetchLandscapeDataForCategory(category);

        landscapeData.forEach(landscape => {
            landscape.Category = category;
        });

        allItems = allItems.concat(landscapeData);
    }

    game.numberOfItems = allItems.length;
    game.landscapes = allItems.sort(() => Math.random() - 0.5);
}

function fetchLandscapeDataForCategory(category) {
    if (category.Type == CategoryTypes.ProvincialCoatOfArms) {
        return provincialCoatOfArms;
    }
    else if (category.Type == CategoryTypes.Flowers) {
        return flowers;
    }
    else if (category.Type == CategoryTypes.ChecmicalElements) {
        return chemicalElements;
    }
}

export function getNextLandscape() {
    if (!game.landscapes || game.landscapes.length === 0) return null;
    return game.landscapes[0];
}

export function onCorrectAnswer() {
    if (game.landscapes && game.landscapes.length > 0) {
        game.landscapes.shift();
    }
}

export function onIncorrectAnswer() {
    if (game.landscapes && game.landscapes.length > 0) {
        const item = game.landscapes.shift();
        game.landscapes.push(item);
    }
}

