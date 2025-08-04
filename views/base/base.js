import { Version, CreatedBy } from "/entities/constants/game.js";

export class Base {
  constructor() {
  }

  init() {
    this._onKeyDown = this._onKeyDown.bind(this);
    this.attachKeyboard();
    
    document.getElementById("version").textContent = `Version: ${Version}`;
    document.getElementById("createdBy").textContent = `Created by: ${CreatedBy}`;
  }

  destroy() {
    this.detachKeyboard();
  }

  _onKeyDown(event) {
    this.hanldeKeyboardEvent(event);
  }

  hanldeKeyboardEvent(event) {
    // This method can be overridden by subclasses to handle keyboard events
  }

  attachKeyboard() {
    document.addEventListener('keydown', this._onKeyDown);
  }

  detachKeyboard() {
    document.removeEventListener('keydown', this._onKeyDown);
  }
}

