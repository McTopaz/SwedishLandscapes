export class ViewParts {
  constructor(name, basePath = "") {
    this.html = `${basePath}views/${name}/${name}.html`;
    this.css = `${basePath}views/${name}/${name}.css`;
    this.script = `${basePath}views/${name}/${name}.js`;
  }
}