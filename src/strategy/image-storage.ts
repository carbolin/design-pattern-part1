import { Filter } from "./filter";
import { Compressor } from "./compressor";

export class ImageStorage {

    constructor(private filter: Filter, private compressor: Compressor) { }

    store(fileName: string): void {

        this.compressor.compress(fileName);
        this.filter.apply(fileName);

        console.log(fileName, 'stored');

    }
}