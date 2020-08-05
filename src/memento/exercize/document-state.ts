
export class DocumentState {

    constructor(private content: string, private fontName: string, private fontSize: number) {

    }

    get docContent(): string {

        return this.content;
    }

    get docFontName(): string {

        return this.fontName;
    }

    get docFontSize(): number {

        return this.fontSize;
    }
}