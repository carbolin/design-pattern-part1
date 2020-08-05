import { Task } from "./task";

export class GenerateReport extends Task {

    protected doExecute(): void {
        
        console.log('generating report');
    }
    
}
