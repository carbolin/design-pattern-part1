import { TravelMode } from "./travel-mode";

export class Cicling implements TravelMode {
    getDirection(): number {
        console.log('Calculating Direction (bicycling)');
        return 2;
    }

    getEta(): number {
        console.log('Calculating ETA (bicycling)');
        return 2;
    }

}