export class Landscape {
    constructor(landscape, path, text = "") {
        this.landscape = landscape;
        this.path = path;
        this.text = text;
    }

    get Landscape() {
        return this.landscape;
    }

    get Path() {
        return this.path;
    }

    get Text() {
        return this.text;
    }
}