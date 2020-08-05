import { UndoableCommand } from "./undoable-command";

export class VideoHistory {

    private _states: UndoableCommand[] = [];

    push(state: UndoableCommand): void {

        this._states.push(state);       
    }

    pop(): UndoableCommand {

        return this._states.pop()!;
    }

    get states(): UndoableCommand[] {

        return this._states;
    }
}
