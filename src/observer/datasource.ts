import { Observer } from "./observer";
import { Subject } from "./subject";

export class DataSource extends Subject {

    private _value!: number;

    get value(): number {

        return this._value;
    }

    set value(int: number) {

        this._value = int;
        this.notifyObservers();
    }



}