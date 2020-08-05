import { DocumentState } from "./document-state";


export class Document {

    constructor(private content: string, private fontName: string, private fontSize: number) { }

    public createDocumentState(): DocumentState {

        return new DocumentState(this.content, this.fontName, this.fontSize);

    }

    public restoreDocumentState(state: DocumentState | null) {

        this.docContent = state!.docContent;
        this.docFontName = state!.docFontName;
        this.docFontSize = state!.docFontSize

    }

    get docContent(): string {
        return this.content;
    }

    set docContent(value: string) {
        this.content = value;
    }

    get docFontName(): string {
        return this.fontName;
    }

    set docFontName(value: string) {

        this.fontName = value;
    }

    get docFontSize(): number {
        return this.fontSize;
    }

    set docFontSize(value: number) {

        this.fontSize = value;
    }

    toString() {

        return `
        Content: ${this.content}
        Fontname: ${this.fontName}
        Fontsize: ${this.fontSize}
        `;

    }

}