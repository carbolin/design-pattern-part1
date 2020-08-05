import { Segment } from "./segment";
import { Filter } from "./filter";

export class FormatSegment implements Segment {

    execute(filter: Filter): void {

        filter.applyFormat(this);
    }

}

