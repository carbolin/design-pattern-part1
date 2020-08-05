import { Handler } from "./handler";

export class QuickbooksReader extends Handler {

    protected doRead(fileName: string): boolean {

        console.log('Reading data from a QuickBooks file.');

        return (fileName.endsWith('.qbw'));
    }
}

