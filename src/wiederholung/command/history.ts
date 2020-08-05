import { UndoableCommand } from "./undoable-command";

export class History {

    private commands: UndoableCommand[] = [];

    push(command: UndoableCommand): void {

        this.commands.push(command)
    }

    pop(): UndoableCommand {

        return this.commands.pop()!;

    }
}