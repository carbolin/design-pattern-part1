import { TravelMode } from "./travel-mode";

export class Cycling implements TravelMode {

    getEta(): number {

        console.log('Calculating ETA (cycling)');
        
        return 2;

    }

    getDirection(): number {

        console.log('Calculating Direction (cycling)');
        
        return 2;
        
    }

    
}