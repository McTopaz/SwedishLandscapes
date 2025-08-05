export class Category {
    constructor(text, iconPath, shortCut) {
        this.text = text;
        this.iconPath = iconPath;
        this.shortCut = shortCut;
        this.isSelected = false;
    }

    get Text() {
        return this.text;
    }

    get IconPath() {
        return this.iconPath;
    }

    get ShortCut() {
        return this.shortCut;
    }

    get IsSelected() {
        return this.isSelected;
    }
    set IsSelected(value) {
        this.isSelected = value;
    }
}