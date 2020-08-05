import { Command } from "./command";
import { AddCustomer } from "./add-customer-command";
import { CustomerService } from "./customer-service";

export class Button {

    static buttonToAddCustomer() {

        return new Button(new AddCustomer(new CustomerService()));
    }

    private _label: string = '';

    constructor(private command: Command) { }

    click(): void {
        this.command.execute();
    }

    get label(): string {

        return this._label;
    }

    set label(value: string) {
        this._label = value;

    }

}
