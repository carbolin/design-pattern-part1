import { Handler } from "./handler";
import { HttpRequest } from "./http-request";

export class Logger extends Handler {

      public doHandle(req: HttpRequest): boolean {

        console.log('Logged');

        return false;

    }

}
