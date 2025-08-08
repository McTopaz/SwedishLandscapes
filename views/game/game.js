import { Base } from "../base/base.js";
import { game} from "/entities/models/game.js";
import { getNextLandscape, onCorrectAnswer, onIncorrectAnswer } from "/usecases/game.js";
import { showResult } from "/usecases/appFlow.js";

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
    btn.addEventListener('click', (event) => {
      this.#handleLandscapeButtonPressed(event.currentTarget);
    });
  });
}

  async #displayLandscape() {
    this.#currentLandscape = getNextLandscape();

    if (!this.#currentLandscape) {
      console.log("No more landscapes available.");
      showResult();
      return;
    }
    else {
      console.log("Displaying landscape:", this.#currentLandscape.landscape);
      this.#displayLandscapeSvg(this.#currentLandscape.path);
    }
  }

  async #displayLandscapeSvg(path) {
    const container = document.getElementById('landscapce');
    var svg = await this.#loadSvgInContainer(path, container);
  }

  #handleLandscapeButtonPressed(button) {
    const landscape = button.dataset.landscape;
    console.log("Landscape button pressed:", landscape);

    this.#currentLandscape.landscape === landscape
      ? this.#correrctAnswer()
      : this.#incorrerctAnswer();
  }

  #correrctAnswer() {
    game.correctAnswers++;
    this.#updateAnswerCounters();
    this.#playSound("/resources/sounds/Correct.wav");
    onCorrectAnswer();
    this.#displayLandscape();
  }

  #incorrerctAnswer() {
    game.incorrectAnswers++;
    this.#updateAnswerCounters();
    this.#playSound("/resources/sounds/Error.wav");
    onIncorrectAnswer();
    this.#displayLandscape();
  }

  #updateAnswerCounters() {
    const correctCounter = document.getElementById("correctCounter");
    const incorrectCounter = document.getElementById("incorrectCounter");
    correctCounter.textContent = game.correctAnswers;
    incorrectCounter.textContent = game.incorrectAnswers;
  }

  #playSound(path) {
    const audio = new Audio(path);
    audio.play().catch(error => {
      console.error("Error playing sound:", error);
    });
  }

  hanldeKeyboardEvent(event) {
  }
}