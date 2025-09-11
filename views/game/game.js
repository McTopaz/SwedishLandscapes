import { Base } from "../base/base.js";
import { game } from "../../entities/models/game.js";
import { getNextLandscape, onCorrectAnswer, onIncorrectAnswer, isAllAnsweresCorrectForLandscape } from "../../usecases/game.js";
import { showResult } from "../../usecases/appFlow.js";
import { BASE_PATH } from "../../entities/models/urlPaths.js";

export class Game extends Base {

  #statusBarContainerName = 'status-bar-container';
  #numberOfCategories = game.categories.filter(c => c.IsSelected).length;
  #currentLandscape = null;

  init() {
    super.init();
    this.#setupLandscapeIndicationContainers();
    this.#setupImages();
    this.#setupAnswers();
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
    this.#setupMap();
    this.#setupHint();
  }

  #setupMap() {
    const path = `${BASE_PATH}resources/images/svg/SwedishLandscapes.svg`
    fetch(path)
      .then(res => res.text())
      .then(svgText => {
        document.getElementById('map').innerHTML = svgText;

        const lappland = document.getElementById('Lappland');
        const norrbotten = document.getElementById('Norrbotten');
        this.#setupLandscapeClickable(lappland);
        this.#setupLandscapeClickable(norrbotten);
      });
  }

  #setupLandscapeClickable(landscapeElement) {
      const handler = (event) => {
          this.#handleLandscapeButtonPressed(event.currentTarget);
      };

      landscapeElement._clickHandler = handler;
      landscapeElement.addEventListener('click', handler);
      landscapeElement.dataset.landscape = landscapeElement.id;
  }

  async #setupHint() {
    const path = `${BASE_PATH}resources/images/svg/Help.svg`
    const container = document.getElementById('hint');
    var svg = await this.#loadSvgInContainer(path, container);
    this.#ensureViewBox(svg);
    this.#scaleSvgToFit(svg);

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
    this.#setupAnswerSvg(check, "check");
    this.#setupAnswerSvg(cross, "cross");
    this.#setupAnswerSvg(sum, "sum");

    document.getElementById("numberOfItems").innerText = game.numberOfItems;
  }

  async #setupAnswerSvg(svgPath, containerName) {
    const container = document.getElementById(containerName);
    var svg = await this.#loadSvgInContainer(svgPath, container);
  }

  async #loadSvgInContainer(svgPath, container) {
    const res = await fetch(svgPath);
    const svgText = await res.text();
    container.innerHTML = svgText.trim();
    const svgElement = container.querySelector('svg');
    return svgElement;
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
    //this.#updateLandscapeIndicator(button);
    button.style.fill = 'rgb(0,200,100)';
    this.#shouldRemoveButtonHandler(button);    
    this.#displayLandscape();
  }

  #shouldRemoveButtonHandler(button) {
    const landscape = button.dataset.landscape;
    const isAllCorrect = isAllAnsweresCorrectForLandscape(landscape);

    if (isAllCorrect && button._clickHandler) {
      button.removeEventListener('click', button._clickHandler);
      delete button._clickHandler;
    }
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
  const svg = await this.#loadSvgInContainer(check, button);
  
  const left = button.dataset.answerLeft;
  const top = button.dataset.answerTop;
  button.style.left = left;
  button.style.top = top;
  button.classList.add('check');
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