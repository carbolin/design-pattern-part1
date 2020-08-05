import { Task } from "./task";

export class GenerateReportTask implements Task {

    execute(): void {

        console.log('...generating Report');
    }

}
