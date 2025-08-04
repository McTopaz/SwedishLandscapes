import { ViewParts } from "/entities/models/viewParts.js";

const repoName = "SwedishLandscapes";
export const BASE_PATH = window.location.pathname.includes(`/${repoName}/`)
  ? `/${repoName}/`
  : "/";

export const ViewPaths = {
  base: new ViewParts("base", BASE_PATH),
  menu: new ViewParts("menu", BASE_PATH),
  game: new ViewParts("game", BASE_PATH),
};