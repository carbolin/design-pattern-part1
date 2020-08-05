import { UiControl } from "./ui-control";
import { Dialogbox } from "./dialogbox";

export class SaveButton extends UiControl {

    private _isEnabled!: boolean;

    constructor(private mediator: Dialogbox) {

        super(mediator)
    }

    get isEnabled() {

        return this._isEnabled;
    }

    set isEnabled(value: boolean) {

        this._isEnabled = value;
        this.mediator.changed(this);

    }
}