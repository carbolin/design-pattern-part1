import { DocumentState } from "./document-state";

export class Document {

    private _content!: string;
    private _fontName!: string;
    private _fontSize!: number;

    set content(value: string) {

        this._content = value;
    }

    set fontName(value: string) {

        this._fontName = value;
    }

    set fontSize(value: number) {

        this._fontSize = value;
    }

    public createState(): DocumentState {

        return new DocumentState(this._content, this._fontName, this._fontSize);

    }

    public restore(state: DocumentState) {

        this.content = state.content;
        this.fontName = state.fontName;
        this.fontSize = state.fontSize;
    }


}

