import { FactSegment } from "./fact-segment";
import { FormatSegment } from "./format-segment";

export interface Filter {

    applyFact(segment: FactSegment): void;
    applyFormat(segment: FormatSegment): void;

}
