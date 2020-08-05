import { UiControl } from "./ui-control";

export class SignupButton extends UiControl {

    private _isEnabled: boolean = false;

    get isEnabled(): boolean {

        return this._isEnabled;
    }

    set isEnabled(value: boolean) {

        this._isEnabled = value;

        this.notify();
    }
}


