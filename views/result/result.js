import { Base } from "../base/base.js";
import { BASE_PATH } from "../../entities/models/urlPaths.js";
import { game } from "../../entities/models/game.js";
import { Title, SubTitle } from "../../entities/constants/game.js";

export class Result extends Base {

  #green = super.getStylePropertyByName("--green");
  #red = super.getStylePropertyByName("--red");
  #blue = super.getStylePropertyByName("--swedishBlue");

  init() {
    super.init();

    document.getElementById("title").textContent = Title;
    document.getElementById("subTitle").textContent = SubTitle;

    this.#setupAnswers();
    this.#setupHomeSvgButton();
  }

  #setupAnswers() {
    const check = `${BASE_PATH}resources/images/svg/Check.svg`;
    const cross = `${BASE_PATH}resources/images/svg/Cross.svg`;
    const sum = `${BASE_PATH}resources/images/svg/Sum.svg`;

    this.#setupAnswerSvg(check, "check", this.#green);
    this.#setupAnswerSvg(cross, "cross", this.#red);
    this.#setupAnswerSvg(sum, "sum", this.#blue);

    document.getElementById("correctCounter").innerText = game.correctAnswers;
    document.getElementById("incorrectCounter").innerText = game.incorrectAnswers;
    document.getElementById("numberOfItems").innerText = game.numberOfItems;
  }

    async #setupAnswerSvg(svgPath, containerName, color) {
    const container = document.getElementById(containerName);
    var svg = await this.#loadSvgInContainer(svgPath, container);
    this.#styleAnswerSvg(svg, color);
  }

  #styleAnswerSvg(element, color) {
    const size = super.getStylePropertyByName("--title");
    const spacinig = super.getStylePropertyByName("--spacing");

    element.style.width = size;
    element.style.height = size;
    element.style.marginRight = spacinig;
    element.style.color = color;
  }

    #setupHomeSvgButton() {
    const svg =  `${BASE_PATH}resources/images/svg/Home.svg`;
    const container = document.getElementById('svgHome');
    this.#loadSvgInContainer(svg, container);
  }

  async #loadSvgInContainer(svgPath, container) {
    const res = await fetch(svgPath);
    const svgText = await res.text();
    container.innerHTML = svgText.trim();
    const svgElement = container.querySelector('svg');
    return svgElement;
  }

  hanldeKeyboardEvent(event) {
  }
}