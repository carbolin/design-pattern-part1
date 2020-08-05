import { Tool } from "./tool";

export class Selection implements Tool {

    mouseDown(): void {
        console.log('Selection icon');

    }
    mouseUp(): void {
        console.log('Draw a dashed square');
    }

}