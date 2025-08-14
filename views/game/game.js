import { Base } from "../base/base.js";
import { game } from "../../entities/models/game.js";
import { getNextLandscape, onCorrectAnswer, onIncorrectAnswer } from "../../usecases/game.js";
import { showResult } from "../../usecases/appFlow.js";
import { BASE_PATH } from "../../entities/models/urlPaths.js";

export class Game extends Base {

  #currentLandscape = null;
  #green = super.getStylePropertyByName("--green");
  #red = super.getStylePropertyByName("--red");
  #blue = super.getStylePropertyByName("--blue");
  #yellow = super.getStylePropertyByName("--swedishYellow");

  init() {
    super.init();
    this.#setupImages();
    this.#setupAnswers();
    this.#setupButtonHandlers();
    this.#displayLandscape();
  }

  #setupImages() {
    var path = "";
    
    path = `${BASE_PATH}resources/images/svg/SwedishLandscapes.svg`
    document.getElementById('map').src = path;

    path = `${BASE_PATH}resources/images/svg/Help.svg`
    document.getElementById('hint').src = path;

    this.#setupHint();
  }

  async #setupHint() {
    const path = `${BASE_PATH}resources/images/svg/Help.svg`
    const container = document.getElementById('hint');
    var svg = await this.#loadSvgInContainer(path, container);
    this.#ensureViewBox(svg);
    this.#scaleSvgToFit(svg);

    svg.style.width = 128;
    svg.style.width = 128;
    svg.style.color = this.#yellow;
  }

  #setupAnswers() {
    const check = `${BASE_PATH}resources/images/svg/Check.svg`;
    const cross = `${BASE_PATH}resources/images/svg/Cross.svg`;
    const sum = `${BASE_PATH}resources/images/svg/Sum.svg`;
    this.#setupAnswerSvg(check, "check", this.#green);
    this.#setupAnswerSvg(cross, "cross", this.#red);
    this.#setupAnswerSvg(sum, "sum", this.#blue);

    document.getElementById("numberOfItems").innerText = game.numberOfItems;
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
      this.#displayLandscapeSvg();
    }
  }

  async #displayLandscapeSvg() {
    // SVG
    const container = document.getElementById('landscapce');
    const svg = await this.#loadSvgInContainer(this.#currentLandscape.Path, container);
    this.#ensureViewBox(svg);
    this.#scaleSvgToFit(svg);
    
    // Text
    const text = document.getElementById('text');
    text.innerText = this.#currentLandscape.Text;
  }

  #ensureViewBox(svgElement) {
      if (!svgElement.hasAttribute('viewBox')) {
          const width = parseFloat(svgElement.getAttribute('width')) || 100;
          const height = parseFloat(svgElement.getAttribute('height')) || 100;
          this.#addViewBox(svgElement, width, height);
      }
  }

  #addViewBox(svgElement, width, height) {
      svgElement.setAttribute('viewBox', `0 0 ${width} ${height}`);
  }

  #scaleSvgToFit(svgElement) {
      svgElement.removeAttribute('width');
      svgElement.removeAttribute('height');
      svgElement.style.width = '100%';
      svgElement.style.height = '100%';
      svgElement.style.display = 'block'; // Tar bort inline gap
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
    this.#playSound(`${BASE_PATH}resources/sounds/Correct.wav`);
    onCorrectAnswer();
    this.#displayLandscape();
  }

  #incorrerctAnswer() {
    game.incorrectAnswers++;
    this.#updateAnswerCounters();
    this.#playSound(`${BASE_PATH}resources/sounds/Error.wav`);
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
    const check = `${BASE_PATH}resources/images/svg/Check.svg`;
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