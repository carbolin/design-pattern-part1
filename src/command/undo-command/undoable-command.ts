import { Command } from "./command";

export interface UndoableCommand extends Command {

    unexecute(): void;
}