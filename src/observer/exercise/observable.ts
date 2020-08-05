import { Observer } from "./observer";

export abstract class Observable {

    private observers: Observer[] = [];

    attach(obs: Observer): void {

        this.observers.push(obs)
    }

    detach(obs: Observer): void {

        const index = this.observers.indexOf(obs);
        this.observers.splice(index, 1);
    }

    notify(): void {

        for (const observer of this.observers)

            observer.update();
    }
}