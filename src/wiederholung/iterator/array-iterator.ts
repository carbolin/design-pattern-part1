import { Iterator } from "./iterator";
import { Product } from "./product";
import { ProductCollection } from "./product-collection";

export class ArrayIterator implements Iterator<Product> {

    private index: number = 0;
    constructor(public collection: ProductCollection) { }

    next(): void {
        this.index++;

    }

    hasNext(): boolean {

        return this.index < this.collection.collection.length;


    }

    current(): Product {

        return this.collection.collection[this.index];

    }


}