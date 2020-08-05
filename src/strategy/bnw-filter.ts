import { Filter } from "./filter";

export class BnwFilter implements Filter {

    apply(fileName: string): void {

        console.log('Black & White Filter applied');

    }


}