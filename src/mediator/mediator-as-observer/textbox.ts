import { UiControl } from "./ui-control";

export class Textbox extends UiControl {

    private _content!: string;

    get content(): string {

        return this._content;
    }

    set content(value: string) {

        this._content = value;
        this.notify();

    }

}