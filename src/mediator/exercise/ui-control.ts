import { Observer } from "./observer";

export class UiControl {

    private observers: Observer[] = [];

    addObserver(obs: Observer): void {

        this.observers.push(obs);
    }

    protected notify(): void {

        for (const observer of this.observers) {

            observer.update();
        }
    }


}