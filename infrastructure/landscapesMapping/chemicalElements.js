import { Landscapes } from "../../entities/constants/landscapes.js";
import { Landscape } from "../../entities/models/landscape.js";
import { BASE_PATH } from "../../entities/models/urlPaths.js";

export const chemicalElements = Object.freeze([
    // Norrland
    new Landscape(Landscapes.Lappland, "Lappland", `${BASE_PATH}resources/images/chemicalelements/Lappland.svg`, "Silver - Ag 47"),
    new Landscape(Landscapes.Norrbotten, "Norrbotten", `${BASE_PATH}resources/images/chemicalelements/Norrbotten.svg`, "Iron - Fe 26"),
    new Landscape(Landscapes.Västerbotten, "Västerbotten", `${BASE_PATH}resources/images/chemicalelements/Vasterbotten.svg`, "Gold - Au 79"),
    new Landscape(Landscapes.Jämtland, "Jämtland", `${BASE_PATH}resources/images/chemicalelements/Jamtland.svg`, "Oxygen - O 8"),
    new Landscape(Landscapes.Ångermanland, "Ångermanland", `${BASE_PATH}resources/images/chemicalelements/Angermanland.svg`, "Carbon - C 6"),
    new Landscape(Landscapes.Härjedalen, "Härjedalen", `${BASE_PATH}resources/images/chemicalelements/Harjedalen.svg`, "Palladium - Pd 46"),
    new Landscape(Landscapes.Medelpad, "Medelpad", `${BASE_PATH}resources/images/chemicalelements/Medelpad.svg`, "Hydrogen - H 1"),
    new Landscape(Landscapes.Hälsingland, "Hälsingland", `${BASE_PATH}resources/images/chemicalelements/Halsingland.svg`, "Nickel - Ni 28"),
    new Landscape(Landscapes.Gästrikland, "Gästrikland", `${BASE_PATH}resources/images/chemicalelements/Gastrikland.svg`, "Cromium - Cr 24"),

    // Svealand
    new Landscape(Landscapes.Dalarna, "Dalarna", `${BASE_PATH}resources/images/chemicalelements/Dalarna.svg`, "Copper - Cu 29"),
    new Landscape(Landscapes.Värmland, "Värmland", `${BASE_PATH}resources/images/chemicalelements/Varmland.svg`, "Manganese - Mn 25"),
    new Landscape(Landscapes.Västmanland, "Västmanland", `${BASE_PATH}resources/images/chemicalelements/Vastmanland.svg`, "Nitrogen - N 7"),
    new Landscape(Landscapes.Uppland, "Uppland", `${BASE_PATH}resources/images/chemicalelements/Uppland.svg`, "Yttrium - Y 39"),
    new Landscape(Landscapes.Närke, "Närke", `${BASE_PATH}resources/images/chemicalelements/Narke.svg`, "Zinc - Zn 30"),
    new Landscape(Landscapes.Södermanland, "Södermanland", `${BASE_PATH}resources/images/chemicalelements/Sodermanland.svg`, "Cobalt - Co 27"),

    // Götaland
    new Landscape(Landscapes.Dalsland, "Dalsland", `${BASE_PATH}resources/images/chemicalelements/Dalsland.svg`, "Silicon - Si 14"),
    new Landscape(Landscapes.Bohuslän, "Bohuslän", `${BASE_PATH}resources/images/chemicalelements/Bohuslan.svg`, "Clorine - Cl 17"),
    new Landscape(Landscapes.Västergötland, "Västergötland", `${BASE_PATH}resources/images/chemicalelements/Vastergotland.svg`, "Uranium - U 92"),
    new Landscape(Landscapes.Östergötland, "Östergötland", `${BASE_PATH}resources/images/chemicalelements/Ostergotland.svg`, "Phosphorus - P 15"),
    new Landscape(Landscapes.Halland, "Halland", `${BASE_PATH}resources/images/chemicalelements/Halland.svg`, "Nattrium - Na 11"),
    new Landscape(Landscapes.Småland, "Småland", `${BASE_PATH}resources/images/chemicalelements/Smaland.svg`, "Kalium - K 19"),
    new Landscape(Landscapes.Gotland, "Gotland", `${BASE_PATH}resources/images/chemicalelements/Gotland.svg`, "Calcium - Ca 20"),
    new Landscape(Landscapes.Öland, "Öland", `${BASE_PATH}resources/images/chemicalelements/Oland.svg`, "Iodine - I 53"),
    new Landscape(Landscapes.Blekinge, "Blekinge", `${BASE_PATH}resources/images/chemicalelements/Blekinge.svg`, "Magnesium - Mg 12"),
    new Landscape(Landscapes.Skåne, "Skåne", `${BASE_PATH}resources/images/chemicalelements/Skane.svg`, "Aluminum - Al 13")
]);