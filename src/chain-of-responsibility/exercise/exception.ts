import { Handler } from "./handler";

export class Exception extends Handler {

    protected doRead(fileName: string): boolean {

        console.log('File format not supported.');

        return true;
    }
}

