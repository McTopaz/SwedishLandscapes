export class Category {
    constructor(type, title, iconPath, shortCut, isSelected = false) {
        this.type = type;
        this.title = title;
        this.iconPath = iconPath;
        this.shortCut = shortCut;
        this.isSelected = isSelected;
    }

    get Type() {
        return this.type;
    }

    get Title() {
        return this.title;
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