import { UiControl } from "./ui-control";
import { Textbox } from "./textbox";
import { Listbox } from "./listbox";
import { SaveButton } from "./button";
import { Observer } from "./observer";

export class ArticleDialogbox implements Observer {

    private textbox = new Textbox();
    private listbox = new Listbox();
    private saveButton = new SaveButton();

    constructor() {

        this.textbox.attach(this);
        this.listbox.attach(this);
        this.saveButton.attach(this);
    }


    update(observable: UiControl): void {

        if (observable === this.listbox)

            this.articleSelected();

        else if (observable === this.textbox) {

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