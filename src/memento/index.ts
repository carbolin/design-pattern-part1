import { Editor } from "./editor";
import { History } from "./history";

// Exercise

// import { Document } from "./exercize/document";
// import { DocumentHistory } from "./exercize/document-history";


// const document = new Document('Servus', 'Arial', 20);
// const docHistory = new DocumentHistory();
// docHistory.addState(document.createDocumentState());


// document.docContent = 'Servus und Hallo';
// docHistory.addState(document.createDocumentState());

// document.docFontSize = 16;
// docHistory.addState(document.createDocumentState());


// console.log(document);


// document.restoreDocumentState(docHistory.restoreState());
// document.restoreDocumentState(docHistory.restoreState());
// document.restoreDocumentState(docHistory.restoreState());
// console.log(document.toString());





const editor = new Editor();
const history = new History();

editor.content = 'a';
history.add(editor.createState());

editor.content = 'b';
history.add(editor.createState());

editor.content = 'c';
history.add(editor.createState());

editor.content = 'd';
editor.restore(history.restore());
editor.restore(history.restore());
console.log(editor.content);

