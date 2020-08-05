import { UndoableCommand } from "./undoable-command";
import { VideoEditor } from "./video-editor";
import { VideoHistory } from "./video-history";

export class LableCommand implements UndoableCommand {
    
    private prevLabel!: string;

    constructor(protected editor: VideoEditor, protected history: VideoHistory) {}

    
    execute(): void {

        this.history.push(this);

    }

    undo(): void {

        this.editor.label = this.prevLabel;
    }
    
}