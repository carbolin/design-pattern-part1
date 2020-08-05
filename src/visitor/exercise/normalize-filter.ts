import { Filter } from "./filter";
import { FactSegment } from "./fact-segment";
import { FormatSegment } from "./format-segment";

export class NormalizeFilter implements Filter {

    applyFact(segment: FactSegment): void {

        console.log('Fact Segment nomalized');

    }

    applyFormat(segment: FormatSegment): void {

        console.log('Format Segment nomalized');
    }

}
