export class Landscape {
    constructor(name, path, text = "") {
        this.name = name;
        this.path = path;
        this.text = text;
    }

    get Name() {
        return this.name;
    }

    get Path() {
        return this.path;
    }

    get Category() {
        return this.category;
    }
    set Category(value) {
        this.category = value;
    }

    get Text() {
        return this.text;
    }
}