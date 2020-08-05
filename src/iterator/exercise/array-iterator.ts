import { Iterator } from "./iterator";
import { Product } from "./product";
import { ProductCollection } from "./product-collection";

export class ArrayIterator implements Iterator<Product> {

    index: number = 0;
    constructor(private productCollection: ProductCollection) { }

    hastNext(): boolean {

        return this.index < this.productCollection.products.length;
    }

    current() {

        return this.productCollection.products[this.index];
    }

    next(): void {

        this.index++;
    }

}