import { Base } from "../base/base.js";
import { game} from "/entities/models/game.js";
import { getNextLandscape, onCorrectAnswer, onIncorrectAnswer } from "/usecases/game.js";

export class Game extends Base {

  #currentLandscape = null;

  init() {
    super.init();
    this.#setupAnswers();
    this.#setupButtonHandlers();
    this.#displayLandscape();
  }

  #setupAnswers() {
    const check = "views/resources/images/svg/Check.svg";
    const cross = "views/resources/images/svg/Cross.svg";
    this.#setupAnswerSvg(check, "check", "lime");
    this.#setupAnswerSvg(cross, "cross", "red");
  }

  async #setupAnswerSvg(svgPath, containerName, color) {
    const container = document.getElementById(containerName);
    var svg = await this.#loadSvgInContainer(svgPath, container);
    this.#styleAnswerSvg(svg, color);
  }

  async #loadSvgInContainer(svgPath, container) {
    const res = await fetch(svgPath);
    const svgText = await res.text();
    container.innerHTML = svgText.trim();
    const svgElement = container.querySelector('svg');
    return svgElement;
  }

  #styleAnswerSvg(element, color) {
    const size = super.getStylePropertyByName("--title");
    const spacinig = super.getStylePropertyByName("--spacing");

    element.style.width = size;
    element.style.height = size;
    element.style.marginRight = spacinig;
    element.style.color = color;
  }

  #setupButtonHandlers() {
    document.querySelectorAll('.map-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const landscape = this.dataset.landscape;
        const id = this.id;
        console.log('Clicked:', landscape, " ID:", id);
      });
    });
  }

  async #displayLandscape() {
    this.#currentLandscape = getNextLandscape();
    console.log("Displaying landscape:", this.#currentLandscape);

    this.#displayLandscapeSvg(this.#currentLandscape.path);
  }

  async #displayLandscapeSvg(path) {
    const container = document.getElementById('landscapce');
    var svg = await this.#loadSvgInContainer(path, container);
  }

  hanldeKeyboardEvent(event) {
  }
}