import { BoldCommand } from "./bold-command";
import { UndoableCommand } from "./undoable-command";

export class History {

    private states: UndoableCommand[] = [];

    push(state: UndoableCommand): void {

        this.states.push(state);
        console.log('UndoableCommand', state);
        
    }

    pop(): UndoableCommand {

        return this.states.pop()!;
    }
}