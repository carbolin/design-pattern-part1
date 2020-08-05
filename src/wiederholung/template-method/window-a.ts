import { Window } from "./window";

export class WindwowA extends Window {

    afterClosing(): void {

        console.log('Doing something after closing');
        
    }
}