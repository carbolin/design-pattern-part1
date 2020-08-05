export class VideoEditor {

    constructor(private _contrast: number) { }

    get contrast(): number {

        return this._contrast;
    }

    set contrast(value: number) {

        this._contrast = value;
    }
}