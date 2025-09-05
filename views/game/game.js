import { Base } from "../base/base.js";
import { game } from "../../entities/models/game.js";
import { getNextLandscape, onCorrectAnswer, onIncorrectAnswer } from "../../usecases/game.js";
import { showResult } from "../../usecases/appFlow.js";
import { BASE_PATH } from "../../entities/models/urlPaths.js";

export class Game extends Base {

  #statusBarContainerName = 'status-bar-container';
  #numberOfCategories = game.categories.filter(c => c.IsSelected).length;

  #currentLandscape = null;
  #green = super.getStylePropertyByName("--green");
  #red = super.getStylePropertyByName("--red");
  #blue = super.getStylePropertyByName("--swedishBlue");
  #yellow = super.getStylePropertyByName("--swedishYellow");

  init() {
    super.init();
    this.#setupLandscapeIndicationContainers();
    this.#setupImages();
    this.#setupAnswers();
    this.#setupButtonHandlers();
    this.#displayLandscape();
  }

  #setupLandscapeIndicationContainers() {
    const landscapeButtons = document.querySelectorAll('.map-btn');
    landscapeButtons.forEach(button => {
      const statusBarContainer = document.createElement('div');
      statusBarContainer.classList.add(this.#statusBarContainerName);
      button.appendChild(statusBarContainer);
    });
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

    svg.style.color = this.#yellow;

    container.addEventListener('click', (event) => {
        this.#hintPressed();
      });
  }

  #hintPressed() {
    window.alert(this.#currentLandscape.Name);
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
    svg.style.color = color;
  }

  async #loadSvgInContainer(svgPath, container) {
    const res = await fetch(svgPath);
    const svgText = await res.text();
    container.innerHTML = svgText.trim();
    const svgElement = container.querySelector('svg');
    return svgElement;
  }

  #setupButtonHandlers() {
    document.querySelectorAll('.map-btn').forEach(btn => {
      const handler = (event) => {
        this.#handleLandscapeButtonPressed(event.currentTarget);
      };
      btn._clickHandler = handler;
      btn.addEventListener('click', handler);
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
      console.log("Displaying landscape:", this.#currentLandscape.Name);
      this.#displayLandscapeImage();
    }
  }

  async #displayLandscapeImage() {
    const path = this.#currentLandscape.Path;

    if (path.endsWith(".svg")) {
      this.#displayLandscapeSvg();
    }
    else {
      this.#displayLandscapeGenericImage();
    }
  }

  async #displayLandscapeSvg() {
    // SVG
    const container = document.getElementById('symbol');
    const svg = await this.#loadSvgInContainer(this.#currentLandscape.Path, container);
    this.#ensureViewBox(svg);
    this.#unlockSvgSizing(svg);
    svg.classList.add('symbol-svg');
    
    // Text
    this.#showAdditionalSymbolText(this.#currentLandscape.Text);
  }

  #showAdditionalSymbolText(text)
  {
    const element = document.getElementById('text');

    if (text === null || text === undefined || text === "") {
      element.classList.add('hidden');
    }
    else {
      element.classList.remove('hidden');
      element.innerText = text;
    }
  }

  #ensureViewBox(svg) {
    if (!svg.hasAttribute('viewBox')) {
        const width = parseFloat(svg.getAttribute('width')) || 100;
        const height = parseFloat(svg.getAttribute('height')) || 100;
        this.#addViewBox(svg, width, height);
    }
  }

  #addViewBox(svg, width, height) {
      svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  }

  #unlockSvgSizing(svg) {
    if (svg) {
      svg.removeAttribute("width");
      svg.removeAttribute("height");
      svg.style.width = '';
      svg.style.height = '';

      if (!svg.hasAttribute('preserveAspectRatio')) {
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      }

      svg.style.display = 'block';
    }
  }

  #scaleSvgToFit(svgElement) {
      svgElement.removeAttribute('width');
      svgElement.removeAttribute('height');
      svgElement.style.width = '100%';
      svgElement.style.height = '100%';
      svgElement.style.display = 'block';
  }

  #displayLandscapeGenericImage() {
    // Image
    const container = document.getElementById('symbol');
    const img = this.#loadGenericImage(this.#currentLandscape.Path, container)
    this.#scaleGenericImageToFit(img);

    // Text
    this.#showAdditionalSymbolText(this.#currentLandscape.Text);
  }

  #loadGenericImage(path, container)
  {
    const imgElement = document.createElement('img');
    imgElement.src = path;
    container.innerHTML = '';
    container.appendChild(imgElement);
    return imgElement;
  }

  #scaleGenericImageToFit(imgElement) {
    imgElement.style.width = '100%';
    imgElement.style.height = '100%';
    imgElement.style.objectFit = 'contain';
    imgElement.style.display = 'block';
  }

  #handleLandscapeButtonPressed(button) {
    const landscape = button.dataset.landscape;
    console.log("Landscape button pressed:", landscape);

    this.#currentLandscape.Name === landscape
      ? this.#correrctAnswer(button)
      : this.#incorrerctAnswer();
  }

  #correrctAnswer(button) {
    game.correctAnswers++;
    this.#updateAnswerCounters();
    this.#playSound(`${BASE_PATH}resources/sounds/Correct.wav`);
    onCorrectAnswer();
    this.#updateLandscapeIndicator(button);
    
    if (button._clickHandler) {
      button.removeEventListener('click', button._clickHandler);
      delete button._clickHandler;
    }

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

#updateLandscapeIndicator(button) {
  const container = button.querySelector(`.${this.#statusBarContainerName}`);
  const buttonLandscapeName = button.dataset.landscape;
  const left = game.landscapes.filter(l => l.Name === buttonLandscapeName).length;
  
  this.#clearStatusBar(container); 

  if (left === 0) {
    this.#changeButtonToCheckSvg(button);
  } else {
    this.#displayStatusBar(button, left);
  }
}

#clearStatusBar(container) {
    container.innerHTML = '';
}

async #changeButtonToCheckSvg(button) {
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

#displayStatusBar(button, left) {
  const container = button.querySelector(`.${this.#statusBarContainerName}`);
  const width = 100 / this.#numberOfCategories;

  const correctCount = this.#numberOfCategories - left;

  for (let i = 0; i < this.#numberOfCategories; i++) {
    const part = document.createElement('div');
    part.style.width = `${width}%`;
    part.classList.add('bar-part');

    if (i < correctCount) {
      part.classList.add('correct');
    }
    
    container.appendChild(part);
  }
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