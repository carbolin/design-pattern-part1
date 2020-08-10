import { Operation } from "./operation";
import { AnchorNode } from "./anchor-node";
import { HeadingNode } from "./heading-node";

export class HighlightOperation implements Operation {

    applyAnchor(node: AnchorNode): void {

        console.log('Highlight Anchor');
    }

    applyHeading(node: HeadingNode): void {

        console.log('Highlight Heading');
    }

}
