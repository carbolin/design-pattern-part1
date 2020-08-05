import { TravelMode } from "./travel-mode";

export class Driving implements TravelMode {
    getDirection(): number {
        console.log('Calculating Direction (driving)');
        return 1;
    }

    getEta(): number {
        console.log('Calculating ETA (driving)');
        return 1;
    }


}