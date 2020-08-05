import { TravelMode } from "./travel-mode";
import { Driving } from "./driving";

export class Board {

    static travelByCar(): Board {

        return new Board(new Driving());

    }

    constructor(private travelMode: TravelMode) { }

    getDirection() {

        this.travelMode.getDirection();
    }


    getEta() {

        this.travelMode.getEta();
    }


    set tm(travelMode: TravelMode) {

        this.travelMode = travelMode;
    }

    get tm(): TravelMode {
        return this.travelMode;
    }
}