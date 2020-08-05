import { UndoableCommand } from "./undoable-command";
import { VideoEditor } from "./video-editor";
import { VideoHistory } from "./video-history";

export class ContrastCommand implements UndoableCommand {

    private prevContrast!: number;

    constructor(private editor: VideoEditor, private history: VideoHistory) { }

    execute(): void {

        this.prevContrast = this.editor.contrast;
        this.history.push(this);
    }

    undo(): void {

        this.editor.contrast = this.prevContrast;
    }

}