import { UiControl } from "./ui-control";
import { Dialogbox } from "./dialogbox";

export class Listbox extends UiControl {

    private _selection!: string;

    constructor(private mediator: Dialogbox) {
        super(mediator);
    }

    get selection(): string {

        return this._selection;
    }

    set selection(value: string) {

        this._selection = value;
        this.mediator.changed(this);
    }

}