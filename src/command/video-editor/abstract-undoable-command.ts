import { UndoableCommand } from "./undoable-command";
import { VideoEditor } from "./video-editor";
import { VideoHistory } from "./video-history";

export class AbstractUndoableCommand implements UndoableCommand {

    constructor(protected editor: VideoEditor, protected history: VideoHistory) { }

    execute(): void {

        this.history.push(this);
    };
    

    undo(): void {

    };


}