import { AuditTrail } from "./strategy-pattern/audit-trail";

export abstract class Task {

    constructor(private auditTrail: AuditTrail) { }

    protected abstract doExecute(): void

    execute(): void {

        this.auditTrail.record();

        this.doExecute();
    }

}
