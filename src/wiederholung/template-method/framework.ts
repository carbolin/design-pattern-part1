import { Window } from "./window";

export class Framework {

    constructor(private window: Window) { }

    exit(): void {

        this.window.close();

    }
}