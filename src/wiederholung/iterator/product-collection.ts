import { Product } from "./product"
import { ArrayIterator } from "./array-iterator";
import { Iterator } from "./iterator";

export class ProductCollection {

    private _collection: Product[] = [];

    push(product: Product): void {

        this._collection.push(product);
    }

    createIterator(): Iterator<Product> {

        return new ArrayIterator(this);

    }

    get collection(): Product[] {

        return this._collection;
    }
}