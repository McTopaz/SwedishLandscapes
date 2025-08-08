import { ViewPaths } from "/entities/models/urlPaths.js";

let currentViewInstance = null;

export function showMenu() {
  showView({
    viewParts: ViewPaths.menu,
    viewClass: "Menu"
  });
}

export function runGame() {
    showView({
        viewParts: ViewPaths.game,
        viewClass: "Game"
    });
}

function showView({ viewParts, viewClass }) {
  //printViewArguments(viewParts, viewClass);
  ensureBaseCssLoaded();
  loadCssInDocument(viewParts.css);

  loadHtmlInDocument(viewParts.html)
    .then(() => import(viewParts.script))
    .then((module) => {

      if (currentViewInstance && typeof currentViewInstance.destroy === "function") {
        console.log("Destroying current view instance:", currentViewInstance);
        currentViewInstance.destroy();
      }

      const ViewClass = module[viewClass];
      if (ViewClass && typeof ViewClass === "function") {
        currentViewInstance = new ViewClass();
        if (typeof currentViewInstance.init === "function") {
          console.log("Initializing view:", viewClass);
          currentViewInstance.init();
        }
      } else {
        console.warn("Invalid or missing view class:", viewClassName);
      }
    })
    .catch((error) => {
      console.error("Error while displaying view:", error);
    });
}

function printViewArguments(viewParts, viewClass) {
  console.log("View name: ", viewClass);
  console.log("View HTML path: ", viewParts.html);
  console.log("View CSS path: ", viewParts.css);
  console.log("View JS path: ", viewParts.script);
}

function ensureBaseCssLoaded() {
  if (!document.querySelector(`link[data-base-css]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = ViewPaths.base.css;
    link.setAttribute('data-base-css', '');
    document.head.appendChild(link);
  }
}

function loadCssInDocument(href) {
  document.querySelectorAll('link[data-view-css]').forEach(link => link.remove());

  if (!document.querySelector(`link[href="${href}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.setAttribute('data-view-css', '');
    document.head.appendChild(link);
  }
}

function loadHtmlInDocument(viewHtmlPath) {
  return fetch(ViewPaths.base.html)
    .then(res => res.text())
    .then(baseHtml => {
      document.body.innerHTML = baseHtml;
      return fetch(viewHtmlPath);
    })
    .then(res => res.text())
    .then(viewHtml => {
      const content = document.getElementById("content");
      content.innerHTML = viewHtml;
    });
}