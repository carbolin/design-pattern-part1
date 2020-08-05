import { Product } from "./product";

export interface Iterator<T> {

    hastNext(): boolean;
    current(): T;
    next(): void;
}