export class EditorState {

    constructor(private _content: string){}
  
    get content() {

        return this._content;
    }
}