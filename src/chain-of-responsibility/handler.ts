import { HttpRequest } from "./http-request";

export abstract class Handler {

    constructor(private next: Handler | null) { }

    public handle(req: HttpRequest): void {

        if (this.doHandle(req))
            return;

        if (this.next !== null)
            this.next.handle(req);
    }

    protected abstract doHandle(req: HttpRequest): boolean;

}

