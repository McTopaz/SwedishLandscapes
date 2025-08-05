import { Base } from "../base/base.js";
import { Title, SubTitle } from "/entities/constants/game.js";
import { runGame } from "/usecases/appFlow.js";
import { game} from "/entities/models/game.js";

export class Menu extends Base {

  #swedishBlue = "";
  #swedishYellow = "";

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
    const rootStyles = getComputedStyle(document.documentElement);
    this.#swedishBlue = rootStyles.getPropertyValue('--swedishBlue').trim();
    this.#swedishYellow = rootStyles.getPropertyValue('--swedishYellow').trim();
  }

  async #displayCategories() {
    const container = document.getElementById("categories");
    container.innerHTML = "";

    for (let index = 0; index < game.Categories.length; index++) {
      const category = game.Categories[index];

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
      checkbox.addEventListener("change", () => {
        category.IsSelected = checkbox.checked;
      });

      // Text.
      const text = document.createElement("label");
      text.textContent = category.Text;

      // Create category in view.
      div.appendChild(img);
      div.appendChild(checkbox);
      div.appendChild(text);
      container.appendChild(div);
    };
  }

  #setupPlaySvgButton() {
    fetch('/views/resources/images/svg/play.svg')
      .then(response => response.text())
      .then(data => {
        const container = document.getElementById('svgPlay');
        container.innerHTML = data;
      });
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

  #playClicked() {
    runGame();
  }

  hanldeKeyboardEvent(event) {
  }
}