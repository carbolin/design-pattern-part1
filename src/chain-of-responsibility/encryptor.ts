import { Handler } from "./handler";
import { HttpRequest } from "./http-request";

export class Encryptor extends Handler {


    protected doHandle(req: HttpRequest): boolean {

        console.log('Encrypt');

        return false;

    }


}