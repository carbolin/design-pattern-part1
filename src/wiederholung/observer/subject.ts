import { Observer } from "./observer";

export abstract class Subject {

    abstract attach(obs: Observer): void;

    abstract notify(): void;
}