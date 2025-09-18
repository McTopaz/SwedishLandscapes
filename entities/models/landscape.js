export class Landscape {
    constructor(id, name, path, text = "") {
        this.id = id;
        this.name = name;
        this.path = path;
        this.text = text;
    }

    get Id() {
        return this.id;
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