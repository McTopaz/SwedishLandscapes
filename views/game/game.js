import { Base } from "../base/base.js";
import { game} from "/entities/models/game.js";
import { getNextLandscape, onCorrectAnswer, onIncorrectAnswer } from "/usecases/game.js";
import { showResult } from "/usecases/appFlow.js";

export class Game extends Base {

  #currentLandscape = null;
  #green = super.getStylePropertyByName("--green");
  #red = super.getStylePropertyByName("--red");

  init() {
    super.init();
    this.#setupAnswers();
    this.#setupButtonHandlers();
    this.#displayLandscape();
  }

  #setupAnswers() {
    const check = "views/resources/images/svg/Check.svg";
    const cross = "views/resources/images/svg/Cross.svg";
    this.#setupAnswerSvg(check, "check", this.#green);
    this.#setupAnswerSvg(cross, "cross", this.#red);
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
      console.log("Displaying landscape:", this.#currentLandscape.Landscape);
      this.#displayLandscapeSvg(this.#currentLandscape.Path);
    }
  }

  async #displayLandscapeSvg(path) {
    const container = document.getElementById('landscapce');
    var svg = await this.#loadSvgInContainer(path, container);
  }

  #handleLandscapeButtonPressed(button) {
    const landscape = button.dataset.landscape;
    console.log("Landscape button pressed:", landscape);

    this.#currentLandscape.Landscape === landscape
      ? this.#correrctAnswer(button)
      : this.#incorrerctAnswer();
  }

  #correrctAnswer(button) {
    game.correctAnswers++;
    this.#updateAnswerCounters();
    this.#changeButtonToCorrectSvg(button);
    
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

  async #changeButtonToCorrectSvg(button) {
    button.style.backgroundImage = "none";
    const check = "views/resources/images/svg/Check.svg";
    const size = super.getStylePropertyByName("--subTitle");
    const svg = await this.#loadSvgInContainer(check, button);
    svg.style.color = this.#green;
    svg.style.width = size;
    svg.style.height = size;

    const left = button.dataset.answerLeft;
    const top = button.dataset.answerTop;
    button.style.left = left;
    button.style.top = top;
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