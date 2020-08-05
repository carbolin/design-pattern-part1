import { UiControl } from "./ui-control";

export class SaveButton extends UiControl {

    private _isEnabled!: boolean;
 
    get isEnabled() {

        return this._isEnabled;
    }

    set isEnabled(value: boolean) {

        this._isEnabled = value;
        this.notify();

    }
}