import { UiControl } from "./ui-control";

export abstract class Dialogbox {

    public abstract changed(control: UiControl): void;
}