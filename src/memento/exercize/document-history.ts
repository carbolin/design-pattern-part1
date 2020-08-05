import { DocumentState } from "./document-state";

export class DocumentHistory {

    private states: DocumentState[] = [];

    addState(documentState: DocumentState) {

        this.states.push(documentState);

    }

    restoreState(): DocumentState {

        return this.states.pop()!;

    }



}