import { ChatClient } from "./wiederholung/strategy/chat-client";
import { AesEncryptor } from "./wiederholung/strategy/aes-encryptor";
import { Framework } from "./wiederholung/template-method/framework";
import { WindwoB } from "./wiederholung/template-method/window-b";
import { History } from "./wiederholung/command/history";
import { VideoEditor } from "./wiederholung/command/video-editor";
import { ContrastCommand } from "./wiederholung/command/contrast-command";


// Strategy

// const encryptor = new AesEncryptor();
// const chatclient = new ChatClient(encryptor);
// chatclient.message = 'Hallo Udo';
// chatclient.send();

// Template Method

// const framwork = new Framework(new WindwoB());
// framwork.exit();


// Command Pattern

// const history = new History();
// const editor = new VideoEditor(5);
// const contrast = new ContrastCommand(10, history, editor);
// contrast.execute();
// console.log(editor.contrast);
// contrast.unexecute();
// console.log(editor.contrast);


// Observer Pattern
