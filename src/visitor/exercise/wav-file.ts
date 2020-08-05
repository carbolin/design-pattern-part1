import { Segment } from "./segment";
import { Filter } from "./filter";

export class WavFile {

    private segments: Segment[] = [];

    public add(segment: Segment): void {

        this.segments.push(segment);
    }

    public read(filter: Filter): void {

        for (const segment of this.segments)

            segment.execute(filter);
    }

}
