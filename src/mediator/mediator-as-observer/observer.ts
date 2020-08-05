import { UiControl } from "./ui-control";

export interface Observer {

    update(control: UiControl): void;
}