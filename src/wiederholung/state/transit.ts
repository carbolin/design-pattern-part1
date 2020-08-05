import { TravelMode } from "./travel-mode";

export class Transit implements TravelMode {

    getEta(): number {

        console.log('Calculating ETA (transit)');
        
        return 3;

    }

    getDirection(): number {

        console.log('Calculating Direction (transit)');
        
        return 3;
        
    }

    
}