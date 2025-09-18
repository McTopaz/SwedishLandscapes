import { Landscapes } from "../../entities/constants/landscapes.js";
import { Landscape } from "../../entities/models/landscape.js";
import { BASE_PATH } from "../../entities/models/urlPaths.js";

export const fishes = Object.freeze([
    // Norrland
    new Landscape(Landscapes.Lappland, "Lappland", `${BASE_PATH}resources/images/fishes/Lappland.jpg`, "Fjällröding - Salvelinus alpinus"),
    new Landscape(Landscapes.Norrbotten, "Norrbotten", `${BASE_PATH}resources/images/fishes/Norrbotten.jpg`, "Siklöja - Coregonus albula"),
    new Landscape(Landscapes.Västerbotten, "Västerbotten", `${BASE_PATH}resources/images/fishes/Vasterbotten.jpg`, "Flodnejonöga - Lampetra fluviatilis"),
    new Landscape(Landscapes.Jämtland, "Jämtland", `${BASE_PATH}resources/images/fishes/Jamtland.jpg`, "Öring - Salmo trutta"),
    new Landscape(Landscapes.Ångermanland, "Ångermanland", `${BASE_PATH}resources/images/fishes/Angermanland.jpg`, "Sik - Coregonus lavaretus"),
    new Landscape(Landscapes.Härjedalen, "Härjedalen", `${BASE_PATH}resources/images/fishes/Harjedalen.jpg`, "Harr - Thymallus thymallus"),
    new Landscape(Landscapes.Medelpad, "Medelpad", `${BASE_PATH}resources/images/fishes/Medelpad.jpg`, "Abborre - Perca fluviatilis"),
    new Landscape(Landscapes.Hälsingland, "Hälsingland", `${BASE_PATH}resources/images/fishes/Halsingland.jpg`, "Id - Leuciscus idus"),
    new Landscape(Landscapes.Gästrikland, "Gästrikland", `${BASE_PATH}resources/images/fishes/Gastrikland.jpg`, "Strömming - Clupea harengus"),

    // Svealand
    new Landscape(Landscapes.Dalarna, "Dalarna", `${BASE_PATH}resources/images/fishes/Dalarna.jpg`, "Elritsa - Phoxinus phoxinus"),
    new Landscape(Landscapes.Värmland, "Värmland", `${BASE_PATH}resources/images/fishes/Varmland.jpg`, "Nors - Osmerus eperlanus"),
    new Landscape(Landscapes.Västmanland, "Västmanland", `${BASE_PATH}resources/images/fishes/Vastmanland.jpg`, "Gös - Sander lucioperca"),
    new Landscape(Landscapes.Uppland, "Uppland", `${BASE_PATH}resources/images/fishes/Uppland.jpg`, "Asp - Aspius aspius"),
    new Landscape(Landscapes.Närke, "Närke", `${BASE_PATH}resources/images/fishes/Narke.jpg`, "Benlöja - Alburnus alburnus"),
    new Landscape(Landscapes.Södermanland, "Södermanland", `${BASE_PATH}resources/images/fishes/Sodermanland.jpg`, "Brax - Abramis brama"),

    // Götaland
    new Landscape(Landscapes.Dalsland, "Dalsland", `${BASE_PATH}resources/images/fishes/Dalsland.jpg`, "Hornsimpa - Triglopsis quadricornis"),
    new Landscape(Landscapes.Bohuslän, "Bohuslän", `${BASE_PATH}resources/images/fishes/Bohuslan.jpg`, "Makrill - Scomber scombrus"),
    new Landscape(Landscapes.Västergötland, "Västergötland", `${BASE_PATH}resources/images/fishes/Vastergotland.jpg`, "Lake - Lota lota"),
    new Landscape(Landscapes.Östergötland, "Östergötland", `${BASE_PATH}resources/images/fishes/Ostergotland.jpg`, "Gädda - Esox lucius"),
    new Landscape(Landscapes.Halland, "Halland", `${BASE_PATH}resources/images/fishes/Halland.jpg`, "Lax - Salmo salar"),
    new Landscape(Landscapes.Småland, "Småland", `${BASE_PATH}resources/images/fishes/Smaland.jpg`, "Mal - Silurus glanis"),
    new Landscape(Landscapes.Gotland, "Gotland", `${BASE_PATH}resources/images/fishes/Gotland.jpg`, "Piggvar - Scophthalmus maximus"),
    new Landscape(Landscapes.Öland, "Öland", `${BASE_PATH}resources/images/fishes/Oland.jpg`, "Skrubbskädda - Platichthys flesus"),
    new Landscape(Landscapes.Blekinge, "Blekinge", `${BASE_PATH}resources/images/fishes/Blekinge.jpg`, "Torsk - Gadus Morhua"),
    new Landscape(Landscapes.Skåne, "Skåne", `${BASE_PATH}resources/images/fishes/Skane.jpg`, "Ål - Anguilla anguilla")
]);