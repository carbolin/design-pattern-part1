import { Window } from "./window";

export class WindwoB extends Window {

    beforeClosing(): void {

        console.log('Doing something before closing');

    }
}