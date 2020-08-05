import { UiControl } from "./ui-control";
import { Dialogbox } from "./dialogbox";

export class Textbox extends UiControl {

    private _content!: string;

    constructor(private mediator: Dialogbox) {
        super(mediator);
    }

    get content(): string {

        return this._content;
    }

    set content(value: string) {

        this._content = value;
        this.mediator.changed(this);

    }

}