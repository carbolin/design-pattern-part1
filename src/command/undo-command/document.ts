export class Document {

    private _content: string = 'Hallo Erbse';

    makeBold() {

        console.log(`<b>${this.content}</b>`);
    }

    get content(): string {

        return this._content;
    }

    set content(value: string) {

        this._content = value;
    }
}