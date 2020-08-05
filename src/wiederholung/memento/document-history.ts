import { DocumentState } from "./document-state";

export class DocumentHistory {

    private states: DocumentState[] = [];

    public push(state: DocumentState): void {

        this.states.push(state);
    }

    public pop(): DocumentState {

        return this.states.pop()!;
    }

}