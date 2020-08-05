import { TravelMode } from "./travel-mode";

export class TravelService {

    constructor(private _travelMode: TravelMode) { }

    getDirection(): number {

        return this._travelMode.getDirection();
    }

    getEta(): number {

        return this._travelMode.getEta();
    }

    set travelMode(mode: TravelMode) {

        this._travelMode = mode;
    }

}