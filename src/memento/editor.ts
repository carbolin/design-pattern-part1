import { EditorState } from "./editor-state";

export class Editor {

    private _content: string = '';

    public createState(): EditorState {

        return new EditorState(this.content);
    }

    public restore(state: EditorState) {

        this._content = state.content;
    }

    set content(value: string) {
        this._content = value;
    }

    get content(): string {
        return this._content;
    }

}