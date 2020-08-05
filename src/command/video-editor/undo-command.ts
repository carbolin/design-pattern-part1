import { VideoHistory } from "./video-history";
import { Command } from "./command";

export class UndoCommand implements Command{

    constructor(private history: VideoHistory) {}

    execute(): void {

        const last = this.history.pop();
        last.undo();

    }
}
