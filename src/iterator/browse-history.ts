import { ArrayIterator } from "./array-iterator";
import { Iterator } from "./iterator";

export class BrowseHistory {

    constructor(private urls: string[]) { }

    push(url: string) {
        this.urls.push(url);
    }

    pop(): string {
        return this.urls.pop()!;
    }

    createIterator(): Iterator {
        return new ArrayIterator(this);
    }

    get urlList(): string[] {
        return this.urls;
    }

}