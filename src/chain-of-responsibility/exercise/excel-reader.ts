import { Handler } from "./handler";

export class ExcelReader extends Handler {

    protected doRead(fileName: string): boolean {

        console.log('Reading data from an Excel spreadsheet.');

        return (fileName.endsWith('.xls'));
    }


}