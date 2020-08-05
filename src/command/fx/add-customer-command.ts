import { CustomerService } from "./customer-service";
import { Command } from "./command";

export class AddCustomer implements Command {

    constructor(private customerService: CustomerService) {}

    execute(): void {

        const id: number = Math.floor(Math.random() * 10)

        this.customerService.addCustomer(id);
        
    }


}