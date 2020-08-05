import { Task } from "./task";

export class TransferMoneyTask implements Task {

    execute(): void {
        
        console.log('...transfering Money');
    }
    
}
