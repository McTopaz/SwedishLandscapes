import { Landscapes } from "../../entities/constants/landscapes.js";
import { Landscape } from "../../entities/models/landscape.js";
import { BASE_PATH } from "../../entities/models/urlPaths.js";

export const fishes = Object.freeze([
    // Norrland
    new Landscape(Landscapes.Lappland, `${BASE_PATH}resources/images/fishes/Lappland.jpg`, "Fjällröding - Salvelinus alpinus"),
    new Landscape(Landscapes.Norrbotten, `${BASE_PATH}resources/images/fishes/Norrbotten.jpg`, "Siklöja - Coregonus albula"),
    new Landscape(Landscapes.Västerbotten, `${BASE_PATH}resources/images/fishes/Vasterbotten.jpg`, "Flodnejonöga - Lampetra fluviatilis"),
    new Landscape(Landscapes.Jämtland, `${BASE_PATH}resources/images/fishes/Jamtland.jpg`, "Öring - Salmo trutta"),
    new Landscape(Landscapes.Ångermanland, `${BASE_PATH}resources/images/fishes/Angermanland.jpg`, "Sik - Coregonus lavaretus"),
    new Landscape(Landscapes.Härjedalen, `${BASE_PATH}resources/images/fishes/Harjedalen.jpg`, "Harr - Thymallus thymallus"),
    new Landscape(Landscapes.Medelpad, `${BASE_PATH}resources/images/fishes/Medelpad.jpg`, "Abborre - Perca fluviatilis"),
    new Landscape(Landscapes.Hälsingland, `${BASE_PATH}resources/images/fishes/Halsingland.jpg`, "Id - Leuciscus idus"),
    new Landscape(Landscapes.Gästrikland, `${BASE_PATH}resources/images/fishes/Gastrikland.jpg`, "Strömming - Clupea harengus"),

    // Svealand
    new Landscape(Landscapes.Dalarna, `${BASE_PATH}resources/images/fishes/Dalarna.jpg`, "Elritsa - Phoxinus phoxinus"),
    new Landscape(Landscapes.Värmland, `${BASE_PATH}resources/images/fishes/Varmland.jpg`, "Nors - Osmerus eperlanus"),
    new Landscape(Landscapes.Västmanland, `${BASE_PATH}resources/images/fishes/Vastmanland.jpg`, "Gös - Sander lucioperca"),
    new Landscape(Landscapes.Uppland, `${BASE_PATH}resources/images/fishes/Uppland.jpg`, "Asp - Aspius aspius"),
    new Landscape(Landscapes.Närke, `${BASE_PATH}resources/images/fishes/Narke.jpg`, "Benlöja - Alburnus alburnus"),
    new Landscape(Landscapes.Södermanland, `${BASE_PATH}resources/images/fishes/Sodermanland.jpg`, "Brax - Abramis brama"),

    // Götaland
    new Landscape(Landscapes.Dalsland, `${BASE_PATH}resources/images/fishes/Dalsland.jpg`, "Hornsimpa - Triglopsis quadricornis"),
    new Landscape(Landscapes.Bohuslän, `${BASE_PATH}resources/images/fishes/Bohuslan.jpg`, "Makrill - Scomber scombrus"),
    new Landscape(Landscapes.Västergötland, `${BASE_PATH}resources/images/fishes/Vastergotland.jpg`, "Lake - Lota lota"),
    new Landscape(Landscapes.Östergötland, `${BASE_PATH}resources/images/fishes/Ostergotland.jpg`, "Gädda - Esox lucius"),
    new Landscape(Landscapes.Halland, `${BASE_PATH}resources/images/fishes/Halland.jpg`, "Lax - Salmo salar"),
    new Landscape(Landscapes.Småland, `${BASE_PATH}resources/images/fishes/Smaland.jpg`, "Mal - Silurus glanis"),
    new Landscape(Landscapes.Gotland, `${BASE_PATH}resources/images/fishes/Gotland.jpg`, "Piggvar - Scophthalmus maximus"),
    new Landscape(Landscapes.Öland, `${BASE_PATH}resources/images/fishes/Oland.jpg`, "Skrubbskädda - Platichthys flesus"),
    new Landscape(Landscapes.Blekinge, `${BASE_PATH}resources/images/fishes/Blekinge.jpg`, "Torsk - Gadus Morhua"),
    new Landscape(Landscapes.Skåne, `${BASE_PATH}resources/images/fishes/Skane.jpg`, "Ål - Anguilla anguilla")
]);