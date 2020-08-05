import { Observable } from "./observable";

export class Stock extends Observable{

    constructor(private _price: number, private _symbol: string) {
        super();
    }

    get price(): number {

        return this._price;
    }

    set price(value: number) {

        this._price = value;
        this.notify();
    }

    toSTring(): void {

        console.log(`Symbol: ${this._symbol} / Price: ${this._price}`);
    }

}
