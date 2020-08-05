import { Product } from "./product";

export interface Iterator<T> {

    next(): void;
    hasNext(): boolean;
    current(): T
}