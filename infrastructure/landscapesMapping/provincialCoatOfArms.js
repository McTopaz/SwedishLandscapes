import { Landscapes } from "../../entities/constants/landscapes.js";
import { Landscape } from "../../entities/models/landscape.js";
import { BASE_PATH } from "../../entities/models/urlPaths.js";

export const provincialCoatOfArms = Object.freeze([
    // Norrland
    new Landscape(Landscapes.Lappland, "Lappland", `${BASE_PATH}resources/images/provincialCoatOfArms/Lappland.svg`),
    new Landscape(Landscapes.Norrbotten, "Norrbotten", `${BASE_PATH}resources/images/provincialCoatOfArms/Norrbotten.svg`),
    new Landscape(Landscapes.Västerbotten, "Västerbotten", `${BASE_PATH}resources/images/provincialCoatOfArms/Vasterbotten.svg`),
    new Landscape(Landscapes.Jämtland, "Jämtland", `${BASE_PATH}resources/images/provincialCoatOfArms/Jamtland.svg`),
    new Landscape(Landscapes.Ångermanland, "Ångermanland", `${BASE_PATH}resources/images/provincialCoatOfArms/Angermanland.svg`),
    new Landscape(Landscapes.Härjedalen, "Härjedalen", `${BASE_PATH}resources/images/provincialCoatOfArms/Harjedalen.svg`),
    new Landscape(Landscapes.Medelpad, "Medelpad", `${BASE_PATH}resources/images/provincialCoatOfArms/Medelpad.svg`),
    new Landscape(Landscapes.Hälsingland, "Hälsingland", `${BASE_PATH}resources/images/provincialCoatOfArms/Halsingland.svg`),
    new Landscape(Landscapes.Gästrikland, "Gästrikland", `${BASE_PATH}resources/images/provincialCoatOfArms/Gastrikland.svg`),

    // Svealand
    new Landscape(Landscapes.Dalarna, "Dalarna", `${BASE_PATH}resources/images/provincialCoatOfArms/Dalarna.svg`),
    new Landscape(Landscapes.Värmland, "Värmland", `${BASE_PATH}resources/images/provincialCoatOfArms/Varmland.svg`),
    new Landscape(Landscapes.Västmanland, "Västmanland", `${BASE_PATH}resources/images/provincialCoatOfArms/Vastmanland.svg`),
    new Landscape(Landscapes.Uppland, "Uppland", `${BASE_PATH}resources/images/provincialCoatOfArms/Uppland.svg`),
    new Landscape(Landscapes.Närke, "Närke", `${BASE_PATH}resources/images/provincialCoatOfArms/Narke.svg`),
    new Landscape(Landscapes.Södermanland, "Södermanland", `${BASE_PATH}resources/images/provincialCoatOfArms/Sodermanland.svg`),

    // Götaland
    new Landscape(Landscapes.Dalsland, "Dalsland", `${BASE_PATH}resources/images/provincialCoatOfArms/Dalsland.svg`),
    new Landscape(Landscapes.Bohuslän, "Bohuslän", `${BASE_PATH}resources/images/provincialCoatOfArms/Bohuslan.svg`),
    new Landscape(Landscapes.Västergötland, "Västergötland", `${BASE_PATH}resources/images/provincialCoatOfArms/Vastergotland.svg`),
    new Landscape(Landscapes.Östergötland, "Östergötland", `${BASE_PATH}resources/images/provincialCoatOfArms/Ostergotland.svg`),
    new Landscape(Landscapes.Halland, "Halland", `${BASE_PATH}resources/images/provincialCoatOfArms/Halland.svg`),
    new Landscape(Landscapes.Småland, "Småland", `${BASE_PATH}resources/images/provincialCoatOfArms/Smaland.svg`),
    new Landscape(Landscapes.Gotland, "Gotland", `${BASE_PATH}resources/images/provincialCoatOfArms/Gotland.svg`),
    new Landscape(Landscapes.Öland, "Öland", `${BASE_PATH}resources/images/provincialCoatOfArms/Oland.svg`),
    new Landscape(Landscapes.Blekinge, "Blekinge", `${BASE_PATH}resources/images/provincialCoatOfArms/Blekinge.svg`),
    new Landscape(Landscapes.Skåne, "Skåne", `${BASE_PATH}resources/images/provincialCoatOfArms/Skane.svg`)
]);