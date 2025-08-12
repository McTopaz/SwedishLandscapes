import { Landscapes } from "/entities/constants/Landscapes.js";
import { Landscape } from "/entities/models/Landscape.js";

export const chemicalElements = Object.freeze([
    // Norrland
    new Landscape(Landscapes.Lappland, "/resources/images/chemicalelements/Lappland.svg", "Silver, Ag 47"),
    new Landscape(Landscapes.Norrbotten, "/resources/images/chemicalelements/Norrbotten.svg", "Iron, Fe 26"),
    new Landscape(Landscapes.Västerbotten, "/resources/images/chemicalelements/Vasterbotten.svg", "Gold, Au 79"),
    new Landscape(Landscapes.Jämtland, "/resources/images/chemicalelements/Jamtland.svg", "Oxygen, O 8"),
    new Landscape(Landscapes.Ångermanland, "/resources/images/chemicalelements/Angermanland.svg", "Carbon, C 6"),
    new Landscape(Landscapes.Härjedalen, "/resources/images/chemicalelements/Harjedalen.svg", "Palladium, Pd 46"),
    new Landscape(Landscapes.Medelpad, "/resources/images/chemicalelements/Medelpad.svg", "Hydrogen, H 1"),
    new Landscape(Landscapes.Hälsingland, "/resources/images/chemicalelements/Halsingland.svg", "Nickel, Ni 28"),
    new Landscape(Landscapes.Gästrikland, "/resources/images/chemicalelements/Gastrikland.svg", "Cromium, Cr 24"),

    // Svealand
    new Landscape(Landscapes.Dalarna, "/resources/images/chemicalelements/Dalarna.svg", "Copper, Cu 29"),
    new Landscape(Landscapes.Värmland, "/resources/images/chemicalelements/Varmland.svg", "Manganese, Mn 25"),
    new Landscape(Landscapes.Västmanland, "/resources/images/chemicalelements/Vastmanland.svg", "Nitrogen, N 7"),
    new Landscape(Landscapes.Uppland, "/resources/images/chemicalelements/Uppland.svg", "Yttrium, Y 39"),
    new Landscape(Landscapes.Närke, "/resources/images/chemicalelements/Narke.svg", "Zinc, Zn 30"),
    new Landscape(Landscapes.Södermanland, "/resources/images/chemicalelements/Sodermanland.svg", "Cobalt, Co 27"),

    // Götaland
    new Landscape(Landscapes.Dalsland, "/resources/images/chemicalelements/Dalsland.svg", "Silicon, Si 14"),
    new Landscape(Landscapes.Bohuslän, "/resources/images/chemicalelements/Bohuslan.svg", "Clorine, Cl 17"),
    new Landscape(Landscapes.Västergötland, "/resources/images/chemicalelements/Vastergotland.svg", "Uranium, U 92"),
    new Landscape(Landscapes.Östergötland, "/resources/images/chemicalelements/Ostergotland.svg", "Phosphorus, P 15"),
    new Landscape(Landscapes.Halland, "/resources/images/chemicalelements/Halland.svg", "Nattrium, Na 11"),
    new Landscape(Landscapes.Småland, "/resources/images/chemicalelements/Smaland.svg", "Kalium, K 19"),
    new Landscape(Landscapes.Gotland, "/resources/images/chemicalelements/Gotland.svg", "Calcium, Ca 20"),
    new Landscape(Landscapes.Öland, "/resources/images/chemicalelements/Oland.svg", "Iodine, I 53"),
    new Landscape(Landscapes.Blekinge, "/resources/images/chemicalelements/Blekinge.svg", "Magnesium, Mg 12"),
    new Landscape(Landscapes.Skåne, "/resources/images/chemicalelements/Skane.svg", "Aluminum, Al 13")
]);