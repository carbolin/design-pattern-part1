import { Observer } from "./observer";

export abstract class Subject {

    private _observers: Observer[] = [];

    addObserver(obs: Observer): void {

        this._observers.push(obs);
    }

    removeObserver(obs: Observer): void {

        const index = this._observers.indexOf(obs);
        this._observers.splice(index, 1);
    }

    notifyObservers(): void {

        for (const observer of this._observers)
            observer.update();
    }

}