import { Product } from "./product"
import { Iterator } from "./iterator"
import { ArrayIterator } from "./array-iterator"

export class ProductCollection {

    private data: Product[]= [];

    add(product: Product): void {

        this.data.push(product);
    }

    createIterator(): Iterator<Product> {

        return new ArrayIterator(this);
    }

    get products(): Product[] {

        return this.data;
    }
}