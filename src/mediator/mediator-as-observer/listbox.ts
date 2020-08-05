import { UiControl } from "./ui-control";

export class Listbox extends UiControl {

    private _selection!: string;

    get selection(): string {

        return this._selection;
    }

    set selection(value: string) {

        this._selection = value;
        this.notify();
    }

}