import { Handler } from "./handler";
import { HttpRequest } from "./http-request";

export class Compressor extends Handler {

      public doHandle(req: HttpRequest): boolean {

        console.log('Compress');
        
        return false;
    }


}