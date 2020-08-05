import { UndoableCommand } from "./undoable-command";
import { History } from "./history";
import { Document } from "./document";

export class BoldCommand implements UndoableCommand {

    private prevContent: string = '';

    constructor(private document: Document, private history: History) { }

    unexecute(): void {

        this.document.content = this.prevContent;
        console.log(this.prevContent);
    }

    execute(): void {
        this.prevContent = this.document.content;
        this.document.makeBold();
        this.history.push(this);
    }

}
