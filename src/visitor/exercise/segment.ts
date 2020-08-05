import { Filter } from "./filter";

export interface Segment {

    execute(filter: Filter): void;
}