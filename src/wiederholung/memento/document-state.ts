
export class DocumentState {

    constructor(private _content: string, private _fontName: string, private _fontSize: number) { }

    get content(): string {

        return this._content;
    }

    get fontName(): string {

        return this._fontName;
    }

    get fontSize(): number {

        return this._fontSize;
    }


}