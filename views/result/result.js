import { Base } from "../base/base.js";
import { BASE_PATH } from "../../entities/models/urlPaths.js";
import { game } from "../../entities/models/game.js";
import { Title, SubTitle } from "../../entities/constants/game.js";
import { showMenu } from "../../usecases/appFlow.js";

export class Result extends Base {

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

    this.#setupAnswerSvg(check, "check");
    this.#setupAnswerSvg(cross, "cross");
    this.#setupAnswerSvg(sum, "sum");

    document.getElementById("correctCounter").innerText = game.correctAnswers;
    document.getElementById("incorrectCounter").innerText = game.incorrectAnswers;
    document.getElementById("numberOfItems").innerText = game.numberOfItems;
  }

  async #setupAnswerSvg(svgPath, containerName) {
    const container = document.getElementById(containerName);
    var svg = await this.#loadSvgInContainer(svgPath, container);
  }

  #setupHomeSvgButton() {
    const svg =  `${BASE_PATH}resources/images/svg/Home.svg`;
    const container = document.getElementById('svgHome');
    this.#loadSvgInContainer(svg, container);

    document.getElementById("home").addEventListener("click", this.#homeClicked);
  }

  async #loadSvgInContainer(svgPath, container) {
    const res = await fetch(svgPath);
    const svgText = await res.text();
    container.innerHTML = svgText.trim();
    const svgElement = container.querySelector('svg');
    return svgElement;
  }

  #homeClicked() {
    showMenu();
  }

  hanldeKeyboardEvent(event) {
  }
}