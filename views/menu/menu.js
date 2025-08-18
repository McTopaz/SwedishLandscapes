import { Base } from "../base/base.js";
import { Title, SubTitle } from "../../entities/constants/game.js";
import { runGame } from "../../usecases/appFlow.js";
import { game } from "../../entities/models/game.js";
import { resetCounters, prepareGame } from "../../usecases/game.js";
import { BASE_PATH } from "../../entities/models/urlPaths.js";

export class Menu extends Base {

  #swedishBlue = "";
  #swedishYellow = "";
  #grey = "";

  init() {
    super.init();
    this.#loadColors();
    this.#displayCategories();
    this.#setupPlaySvgButton();

    document.getElementById("title").textContent = Title;
    document.getElementById("subTitle").textContent = SubTitle;
    document.getElementById("play").addEventListener("click", this.#playClicked);
  }

  #loadColors() {
    this.#swedishBlue = super.getStylePropertyByName('--swedishBlue').trim();
    this.#swedishYellow = super.getStylePropertyByName('--swedishYellow').trim();
    this.#grey = super.getStylePropertyByName("--grey");
  }

  async #displayCategories() {
    const container = document.getElementById("categories");
    container.innerHTML = "";

    for (let index = 0; index < game.categories.length; index++) {
      const category = game.categories[index];

      // Main div.
      const div = document.createElement("div");
      div.style.display = 'flex';
      div.style.alignItems = 'center';
      div.style.marginBottom = '10px';

      // SVG.
      const path = category.IconPath;
      const img = document.createElement("div");
      const color = index % 2 === 0 ? this.#swedishYellow : this.#swedishBlue;
      const svg = await this.#loadSvgInContainer(path, img);
      this.#setupSvg(svg, color);

      // Checkbox.
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.style.marginRight = '10px';
      checkbox.checked = category.IsSelected;
      checkbox.disabled = category.IsDisabled;
      checkbox.addEventListener("change", () => {
        category.IsSelected = checkbox.checked;
        this.#checkForNoCategorySelected();
      });

      // Text.
      const text = document.createElement("label");
      text.textContent = category.Title;

      // Create category in view.
      div.appendChild(img);
      div.appendChild(checkbox);
      div.appendChild(text);
      container.appendChild(div);
    };
  }

  #setupPlaySvgButton() {
    const svg =  `${BASE_PATH}resources/images/svg/Play.svg`;
    const container = document.getElementById('svgPlay');
    this.#loadSvgInContainer(svg, container);
  }

  async #loadSvgInContainer(svgPath, container) {
    const res = await fetch(svgPath);
    const svgText = await res.text();
    container.innerHTML = svgText.trim();
    const svgElement = container.querySelector('svg');
    return svgElement;
  }

  #setupSvg(element, color) {
    element.style.width = '32px';
    element.style.height = '32px';
    element.style.marginRight = '10px';
    element.style.color = color;
  }

  #checkForNoCategorySelected() {
    const checkboxContainer = document.getElementById("categories");
    const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]');
    const anyChecked = Array.from(checkboxes).some(cb => cb.checked);

    anyChecked
      ? this.#enablePlayButton()
      : this.#disablePlayButton();
  }

  #enablePlayButton() {
    const playButton = document.getElementById("play");
    const color = this.#swedishYellow;
    playButton.disabled = false;
    playButton.style.backgroundColor = color;
    playButton.style.cursor = 'pointer';
  }

  #disablePlayButton() {
    const playButton = document.getElementById("play");
    const color = this.#grey;
    playButton.disabled = true;
    playButton.style.backgroundColor = color;
    playButton.style.cursor = 'not-allowed';
  }

  #playClicked() {
    resetCounters();
    prepareGame();
    runGame();
  }

  hanldeKeyboardEvent(event) {
  }
}