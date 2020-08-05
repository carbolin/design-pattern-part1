import { AnchorNode } from "./anchor-node";
import { HeadingNode } from "./heading-node";

export interface Operation {

    applyAnchor(node: AnchorNode):void;
    
    applyHeading(node: HeadingNode):void;
}