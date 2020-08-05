import { Filter } from "./filter";
import { FactSegment } from "./fact-segment";
import { FormatSegment } from "./format-segment";

export class ReduceNoiseFilter implements Filter {

    applyFact(segment: FactSegment): void {

        console.log('Fact Segment reduce noise filter applied');

    }

    applyFormat(segment: FormatSegment): void {

        console.log('Format Segment reduce noise filter applied');
    }

}

