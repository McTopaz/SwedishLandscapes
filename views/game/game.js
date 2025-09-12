import { Base } from "../base/base.js";
import { game } from "../../entities/models/game.js";
import { getNextLandscape, onCorrectAnswer, onIncorrectAnswer, isAllAnsweresCorrectForLandscape, remainingAnswersForLandscape } from "../../usecases/game.js";
import { showResult } from "../../usecases/appFlow.js";
import { BASE_PATH } from "../../entities/models/urlPaths.js";

export class Game extends Base {

  #numberOfCategories = game.categories.filter(c => c.IsSelected).length;
  #currentLandscape = null;
  #landscapeIds = [
    'Lappland','Norrbotten','Vasterbotten','Jamtland','Angermanland','Harjedalen','Medelpad','Halsingland','Gastrikland',
    'Dalarna','Varmland','Vastmanland','Uppland','Narke','Sodermanland',
    'Dalsland','Bohuslan','Vastergotland','Ostergotland','Halland','Smaland','Gotland','Oland','Blekinge','Skane'
  ];
  #yellow = "#FFFF00";

  init() {
    super.init();
    this.#setupImages();
    this.#setupAnswers();
    this.#displayLandscape();
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
        this.#setupLandscapesClickable();
      });
  }

  #setupLandscapesClickable() {
    this.#landscapeIds.forEach(landscape => {
      this.#setupLandscapeClickable(landscape);
    });
  }

  #setupLandscapeClickable(landscape) {
    const landscapeElement = document.getElementById(landscape);
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
      : this.#incorrerctAnswer(button);
  }

  #correrctAnswer(button) {
    game.correctAnswers++;
    this.#updateAnswerCounters();
    this.#playSound(`${BASE_PATH}resources/sounds/Correct.wav`);
    onCorrectAnswer();
    this.#showLandscapeProgression(button);    
    this.#displayLandscape();
  }

  #showLandscapeProgression(button) {
    const landscape = button.dataset.landscape;
    const isAllCorrect = isAllAnsweresCorrectForLandscape(landscape);

    if (isAllCorrect && button._clickHandler) {
      this.#markLandscapeComplete(button);
    }
    else {
      this.#assignLandscapeProgression(landscape, button);
    }
  }

  #markLandscapeComplete(landscapeElement){
    landscapeElement.style.fill = "";
    landscapeElement.classList.add("correctanswer");
    landscapeElement.removeEventListener('click', landscapeElement._clickHandler);
    delete landscapeElement._clickHandler;
  }

  #assignLandscapeProgression(landscape, landscapeElement) {
    const total = this.#numberOfCategories;
    const remaining = remainingAnswersForLandscape(landscape);
    const correct = total - remaining;

    if (correct === 1) {
      landscapeElement.style.fill = this.#yellow;
    }
    else {
      const progress = (correct - 1) / (total - 1);
      const eased = Math.pow(progress, 2);
      const start = { r: 255, g: 255, b: 0 };
      const end   = { r: 180, g: 220, b: 40 };
      const r = Math.round(start.r + (end.r - start.r) * eased);
      const g = Math.round(start.g + (end.g - start.g) * eased);
      const b = Math.round(start.b + (end.b - start.b) * eased);
      landscapeElement.style.fill = `rgb(${r},${g},${b})`;
    }
  }

  #incorrerctAnswer(landscapeElement) {
    game.incorrectAnswers++;
    this.#showIncorrectAnswer(landscapeElement);
    this.#updateAnswerCounters();
    this.#playSound(`${BASE_PATH}resources/sounds/Error.wav`);
    onIncorrectAnswer();
    this.#displayLandscape();
  }

#showIncorrectAnswer(landscapeElement) {
  const originalColor = landscapeElement.style.fill || getComputedStyle(landscapeElement).fill;

  landscapeElement.style.fill = "";
  landscapeElement.classList.add("incorrectanswer");

  setTimeout(() => {
    landscapeElement.classList.remove("incorrectanswer");
    landscapeElement.style.fill = originalColor;
  }, 500);
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