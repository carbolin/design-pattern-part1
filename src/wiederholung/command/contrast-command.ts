import { UndoableCommand } from "./undoable-command";
import { History } from "./history";
import { VideoEditor } from "./video-editor";

export class ContrastCommand implements UndoableCommand {

    private prevContrast!: number;

    constructor(private contrast: number, private history: History, private editor: VideoEditor) { }

    execute(): void {

        this.prevContrast = this.editor.contrast;
        this.history.push(this);
        this.editor.contrast = this.contrast;

    }

    unexecute(): void {

        this.editor.contrast = this.prevContrast;
    }


}