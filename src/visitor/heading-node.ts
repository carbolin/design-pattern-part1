import { HtmlNode } from "./html-node";
import { Operation } from "./operation";

export class HeadingNode implements HtmlNode {

    private _content: string = 'heading';

    execute(operation: Operation): void {

        operation.applyHeading(this);
    }

    get content(): string {

        return this._content;
    }

}