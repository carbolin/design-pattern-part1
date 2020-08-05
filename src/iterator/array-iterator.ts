import { Iterator } from "./iterator";
import { BrowseHistory } from "./browse-history";

export class ArrayIterator implements Iterator {

    private index: number = 0;

    constructor(private history: BrowseHistory) { }

    hasNext(): boolean {
        return this.index < this.history.urlList.length;
    }

    current(): string {
        return this.history.urlList[this.index];
    }

    next(): void {
        this.index++;
    }


}