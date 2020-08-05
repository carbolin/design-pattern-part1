import { UiControl } from "./ui-control";

export class Checkbox extends UiControl {

    private _isChecked: boolean = false;

    get isChecked(): boolean {

        return this._isChecked;
    }

    set isChecked(value: boolean) {

        this._isChecked = value;

        this.notify();
    }


}

