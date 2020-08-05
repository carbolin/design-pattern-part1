import { Operation } from "./operation";
import { AnchorNode } from "./anchor-node";
import { HeadingNode } from "./heading-node";

export class PlaintextOperation implements Operation {

    applyAnchor(node: AnchorNode): void {

        console.log('Plain Text: ', node.content);
    }

    applyHeading(node: HeadingNode): void {

        console.log('Plain Text: ', node.content);
    }

}