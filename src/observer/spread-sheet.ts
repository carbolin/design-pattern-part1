import { Observer } from "./observer";
import { DataSource } from "./datasource";

export class SpreadSheet implements Observer {

    constructor(private datasource: DataSource) { }

    update(): void {

        console.log('Spreadsheet got updated', this.datasource.value);

    }


}