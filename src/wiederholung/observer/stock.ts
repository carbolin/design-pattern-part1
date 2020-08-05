import { Subject } from "./subject";
import { Observer } from "./observer";

export class Stock extends Subject {

    private observers: Observer[] = [];

    constructor(private _name: string, private _price: number) {

        super()
    }

    public attach(obs: Observer): void {

        this.observers.push(obs);

    }

    public notify(): void {

        for (const observer of this.observers)
            observer.update();

    }

    set name(value: string) {

        this.name = value;
    }

    set price(value: number) {

        this._price = value;
    }

    toSTring(): void {

        console.log(`Symbol: ${this._name} / Price: ${this._price}`);
    }


}