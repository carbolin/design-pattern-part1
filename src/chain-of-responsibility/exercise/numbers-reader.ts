import { Handler } from "./handler";

export class NumbersReader extends Handler {

    protected doRead(fileName: string): boolean {

        console.log('Reading data from a Numbers spreadsheet.');

        return (fileName.endsWith('.numbers'));
    }
}

