import { Observer } from "./observer";

export abstract class UiControl {

    private observers: Observer[] = [];

    attach(obs: Observer) {

        this.observers.push(obs);

    }

    protected notify(): void {

        for (const observer of this.observers)
            observer.update(this);
    }


}