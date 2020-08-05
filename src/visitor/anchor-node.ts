import { HtmlNode } from "./html-node";
import { Operation } from "./operation";

export class AnchorNode implements HtmlNode {

    private _content: string = 'anchor';

    execute(operation: Operation): void {

        operation.applyAnchor(this);
    }

    get content(): string {

        return this._content;
    }


}