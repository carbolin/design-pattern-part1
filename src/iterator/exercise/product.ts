export class Product {

    constructor(private id: number, private name: string) { }

    toString() {
        return `Product: ${this.id} ${this.name}`;
    }
}