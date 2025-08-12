export class Category {
    constructor(type, title, iconPath, shortCut, isSelected = false, isDisabled = false) {
        this.type = type;
        this.title = title;
        this.iconPath = iconPath;
        this.shortCut = shortCut;
        this.isSelected = isSelected;
        this.isDisabled = isDisabled;
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
    
    get IsDisabled() {
        return this.isDisabled;
    }
}