import { Tool } from "./tool";

export class Canvas {

    private currentTool!: Tool;

    mouseUp(): void {
        this.currentTool.mouseUp();
    }

    mouseDown(): void {

        this.currentTool.mouseDown();
    }

    set tool(tool: Tool) {

        this.currentTool = tool;
    }

    get tool(): Tool {

        return this.currentTool;
    }


}