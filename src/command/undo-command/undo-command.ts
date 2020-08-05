import { History } from "./history";

export class UndoCommand {

    constructor(private history: History) { }

    execute(): void {

        const last = this.history.pop();
        last.unexecute();

    }
}
