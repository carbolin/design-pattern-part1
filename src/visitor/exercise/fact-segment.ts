import { Segment } from "./segment";
import { Filter } from "./filter";

export class FactSegment implements Segment {

    execute(filter: Filter): void {
        filter.applyFact(this)
    }
    
}
