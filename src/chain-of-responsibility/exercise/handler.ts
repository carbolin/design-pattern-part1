export abstract class Handler {

    constructor(private next: Handler | null) { }

    public read(filename: string) {

        if (this.doRead(filename))
            return;

        if (this.next !== null)
            this.next.read(filename);

    }

    protected abstract doRead(fileName: string): boolean;
}