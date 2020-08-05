import { Window } from "./window";

export class Configuration extends Window {

    beforeClosing(): void {
        
        console.log('Confirm changes?');
        
    }
        
}