import { Handler } from "./handler";
import { HttpRequest } from "./http-request";

export class Authenticator extends Handler {

    public doHandle(req: HttpRequest): boolean {

        const isValid = (req.username === 'admin' && req.password === '1234');

        console.log('Authentication');

        return !isValid;
    }

}

