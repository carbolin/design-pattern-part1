


// Exercise

// import { VideoEditor } from "./command/video-editor/video-editor";
// import { VideoHistory } from "./command/video-editor/video-history";
// import { ContrastCommand } from "./command/video-editor/contrast-command";
// import { UndoCommand } from "./command/video-editor/undo-command";


// const editor = new VideoEditor();
// const history = new VideoHistory();
// const contrastCommand = new ContrastCommand(editor, history);

// editor.contrast = 10;
// editor.label = 'Alle Hände hoch';
// contrastCommand.execute();

// editor.contrast = 20;
// // contrastCommand.execute();

// console.log(history.states);
// editor.toString();
// const undo = new UndoCommand(history);
// undo.execute();
// editor.toString();






// const undo = new UndoCommand(history);
// undo.execute();
// editor.toString();


// contrastCommand.undo();
// editor.toString();





// Undo Command

// import { BoldCommand } from "./command/undo-command/bold-command";
// import { Document } from "./command/undo-command/document";
// import { History } from "./command/undo-command/history";
// import { UndoCommand } from "./command/undo-command/undo-command";

// const document = new Document();
// const history = new History();
// const boldCommand = new BoldCommand(document, history);
// document.content = 'Hallo Fisch';
// boldCommand.execute();
// const undo = new UndoCommand(history);
// undo.execute();

// Command

// import { Button } from "./command/fx/button";

// const button = Button.buttonToAddCustomer();
// button.click();
