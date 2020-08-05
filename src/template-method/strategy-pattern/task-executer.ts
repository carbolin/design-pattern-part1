import { Task } from "./task";
import { AuditTrail } from "./audit-trail";
import { TransferMoneyTask } from "./transfer-money-task";
import { GenerateReportTask } from "./generate-report-task";

export class TaskExecuter {

    constructor(private auditTrail: AuditTrail, private task: Task) { }

    static transferMoney() {

        return new TaskExecuter(new AuditTrail(), new TransferMoneyTask());
    }
    static generateReport() {

        return new TaskExecuter(new AuditTrail(), new GenerateReportTask());
    }

    execute() {

        this.auditTrail.record();
        this.task.execute();

    }
}