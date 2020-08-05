import { Observer } from "./observer";
import { DataSource } from "./datasource";

export class Chart implements Observer {

    constructor(private datasource: DataSource) { }

    update(): void {

        console.log('Chart got updated', this.datasource.value);

    }


}