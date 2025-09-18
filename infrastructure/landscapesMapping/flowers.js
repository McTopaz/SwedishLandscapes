import { Landscapes } from "../../entities/constants/landscapes.js";
import { Landscape } from "../../entities/models/landscape.js";
import { BASE_PATH } from "../../entities/models/urlPaths.js";

export const flowers = Object.freeze([
    // Norrland
    new Landscape(Landscapes.Lappland, "Lappland", `${BASE_PATH}resources/images/flowers/Lappland.png`, "Fjällsippa - Dryas octopetala"),
    new Landscape(Landscapes.Norrbotten, "Norrbotten", `${BASE_PATH}resources/images/flowers/Norrbotten.png`, "Åkerbär - Rubus arcticus"),
    new Landscape(Landscapes.Västerbotten, "Västerbotten", `${BASE_PATH}resources/images/flowers/Vasterbotten.png`, "Kung Karls spira - Pedicularis sceptrum-carolinum"),
    new Landscape(Landscapes.Jämtland, "Jämtland", `${BASE_PATH}resources/images/flowers/Jamtland.png`, "Brunkulla - Gymnadenia nigra"),
    new Landscape(Landscapes.Ångermanland, "Ångermanland", `${BASE_PATH}resources/images/flowers/Angermanland.png`, "Styvmorsviol - Viola tricolor"),
    new Landscape(Landscapes.Härjedalen, "Härjedalen", `${BASE_PATH}resources/images/flowers/Harjedalen.png`, "Fjällviol - Viola biflora"),
    new Landscape(Landscapes.Medelpad, "Medelpad", `${BASE_PATH}resources/images/flowers/Medelpad.png`, "Smörboll - Trollius europaeus"),
    new Landscape(Landscapes.Hälsingland, "Hälsingland", `${BASE_PATH}resources/images/flowers/Halsingland.png`, "Lin - Linum usitatissimum"),
    new Landscape(Landscapes.Gästrikland, "Gästrikland", `${BASE_PATH}resources/images/flowers/Gastrikland.png`, "Liljekonvalj - Convallaria majalis"),

    // Svealand
    new Landscape(Landscapes.Dalarna, "Dalarna", `${BASE_PATH}resources/images/flowers/Dalarna.png`, "Blåklocka - Campanula rotundifolia"),
    new Landscape(Landscapes.Värmland, "Värmland", `${BASE_PATH}resources/images/flowers/Varmland.png`, "Duvkulla - Gymnadenia conopsea"),
    new Landscape(Landscapes.Västmanland, "Västmanland", `${BASE_PATH}resources/images/flowers/Vastmanland.png`, "Mistel - Viscum album"),
    new Landscape(Landscapes.Uppland, "Uppland", `${BASE_PATH}resources/images/flowers/Uppland.png`, "Kungsängslilja - Fritillaria meleagris"),
    new Landscape(Landscapes.Närke, "Närke", `${BASE_PATH}resources/images/flowers/Narke.png`, "Gullviva - Primula veris"),
    new Landscape(Landscapes.Södermanland, "Södermanland", `${BASE_PATH}resources/images/flowers/Sodermanland.png`, "Vit näckros - Nymphaea alba"),

    // Götaland
    new Landscape(Landscapes.Dalsland, "Dalsland", `${BASE_PATH}resources/images/flowers/Dalsland.png`, "Förgätmigej - Myosotis scorpioides"),
    new Landscape(Landscapes.Bohuslän, "Bohuslän", `${BASE_PATH}resources/images/flowers/Bohuslan.png`, "Vildkaprifol - Lonicera periclymenum"),
    new Landscape(Landscapes.Västergötland, "Västergötland", `${BASE_PATH}resources/images/flowers/Vastergotland.png`, "Ljung - Calluna vulgaris"),
    new Landscape(Landscapes.Östergötland, "Östergötland", `${BASE_PATH}resources/images/flowers/Ostergotland.png`, "Blåklint - Centaurea cyanus"),
    new Landscape(Landscapes.Halland, "Halland", `${BASE_PATH}resources/images/flowers/Halland.png`, "Hårginst - Genista pilosa"),
    new Landscape(Landscapes.Småland, "Småland", `${BASE_PATH}resources/images/flowers/Smaland.png`, "Linnea - Linnaea borealis"),
    new Landscape(Landscapes.Gotland, "Gotland", `${BASE_PATH}resources/images/flowers/Gotland.png`, "Murgröna - Hedera helix"),
    new Landscape(Landscapes.Öland, "Öland", `${BASE_PATH}resources/images/flowers/Oland.png`, "Ölandssolvända - Helianthemum oelandicum"),
    new Landscape(Landscapes.Blekinge, "Blekinge", `${BASE_PATH}resources/images/flowers/Blekinge.png`, "Kungsljus - Verbascum thapsus"),
    new Landscape(Landscapes.Skåne, "Skåne", `${BASE_PATH}resources/images/flowers/Skane.png`, "Prästkrage - Leucanthemum vulgare")
]);