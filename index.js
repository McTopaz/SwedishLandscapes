import { initializeApp } from "./usecases/appInit.js";
import { showMenu } from "./usecases/appFlow.js";
import { BASE_PATH } from "./entities/models/urlPaths.js"

console.log("Base path:", BASE_PATH);

window.addEventListener("DOMContentLoaded", () => {
  initializeApp();
  showMenu();
});