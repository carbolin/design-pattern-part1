import { Observer } from "./observer";
import { SignupButton } from "./signup-button";
import { Checkbox } from "./checkbox";
import { Textbox } from "./textbox";

export class SignupDialogbox implements Observer{

    private signupButton = new SignupButton();
    private checkbox = new Checkbox();
    private username = new Textbox();
    private password = new Textbox();

    constructor() {

        this.password.addObserver(this);
        this.username.addObserver(this);
        this.checkbox.addObserver(this);
        
    }

    update(): void {
        
        this.controlChanged();
    }

    private controlChanged(): void {
        this.signupButton.isEnabled =  this.isFormValid();
    }

    private isFormValid(): boolean {

        return !!this.username.content && !!this.password.content && this.checkbox.isChecked;
    }

    userinteration(): void {

        console.log('initially', this.signupButton.isEnabled);
        this.username.content = 'schorsch';
        console.log('after username', this.signupButton.isEnabled);
        this.password.content = 'abcd1234';
        console.log('after password', this.signupButton.isEnabled);
        this.checkbox.isChecked = true;
        console.log('after checked', this.signupButton.isEnabled);       
    }
}
