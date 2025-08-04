import { Base } from "../base/base.js";
import { Title, SubTitle } from "/entities/constants/game.js";
import { runGame } from "/usecases/appFlow.js";

const menuLogo = "/entities/asciiArts/menuLogo.txt";

export class Menu extends Base {
  init() {
    super.init();

    document.getElementById("title").textContent = Title;
    document.getElementById("subTitle").textContent = SubTitle;
    document.getElementById("play").addEventListener("click", super.playClicked);
  }

  #playClicked() {
    runGame();
  }

  hanldeKeyboardEvent(event) {
  }
}