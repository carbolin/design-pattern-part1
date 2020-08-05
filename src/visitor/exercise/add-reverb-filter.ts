import { Filter } from "./filter";
import { FactSegment } from "./fact-segment";
import { FormatSegment } from "./format-segment";

export class AddReverbFilter implements Filter {

    applyFact(segment: FactSegment): void {

        console.log('Fact Segment reverb filter applied');

    }

    applyFormat(segment: FormatSegment): void {

        console.log('Format Segment reverb filter applied');
    }

}

