import { Window } from "./window";

export class GuiFramework {

    constructor(private window: Window) {}

    exit(): void {
        
        console.log('closing GUI');
        
        this.window.close();
    }
}