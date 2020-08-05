import { Dialogbox } from "./dialogbox";
import { UiControl } from "./ui-control";
import { Textbox } from "./textbox";
import { Listbox } from "./listbox";
import { SaveButton } from "./button";

export class ArticleDialogbox extends Dialogbox {

    private textbox = new Textbox(this);
    private listbox = new Listbox(this);
    private saveButton = new SaveButton(this);

    changed(control: UiControl): void {

        if (control === this.listbox)

            this.articleSelected();

        else if (control === this.textbox) {

            this.titleChanged()

        }

    }

    public simulateUserInteraction(): void {
        this.listbox.selection = "Article_1";
        this.textbox.content = "";

        console.log(`List: ${this.listbox.selection}, \nButton: ${this.saveButton.isEnabled}`);
        

    }

    private titleChanged(): void {

        const content = this.textbox.content;
        const isEmpty = !!content;
        this.saveButton.isEnabled = isEmpty;

    }

    private articleSelected(): void {

        this.textbox.content = this.listbox.selection;
        this.saveButton.isEnabled = true;

    }


}