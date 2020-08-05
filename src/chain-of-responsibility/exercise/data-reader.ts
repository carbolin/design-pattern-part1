import { Handler } from "./handler";

export class DataReader {

    constructor(private reader: Handler) { }

    public read(filename: string) {

        this.reader.read(filename);
    }

}