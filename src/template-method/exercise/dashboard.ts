import { Window } from "./window";

export class Dashboard extends Window {

    afterClosing(): void {

        console.log('recdirect to other window');
        
    }
    
}