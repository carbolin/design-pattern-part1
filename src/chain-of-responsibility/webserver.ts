import { Handler } from "./handler";
import { HttpRequest } from "./http-request";

export class Webserver {

    constructor(private handler: Handler) { }

    public handle(req: HttpRequest) {

        this.handler.handle(req);

    }

}
