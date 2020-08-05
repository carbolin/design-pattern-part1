import { HtmlNode } from "./html-node";
import { Operation } from "./operation";

export class HtmlDocument {

    private nodes: HtmlNode[] = [];

    public add(node: HtmlNode) {

        this.nodes.push(node);

    }

    public execute(operation: Operation): void {

        for (const node of this.nodes)

            node.execute(operation);
    }
}