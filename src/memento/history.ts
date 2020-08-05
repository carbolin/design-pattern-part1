import { EditorState } from "./editor-state";

export class History {

    private _states: EditorState[] = [];

    add(state: EditorState): void {

        this._states.push(state);
    }

    restore(): EditorState {

        return this._states.pop()!;
    }

    get states(): EditorState[] {

        return this._states;
    }

}

