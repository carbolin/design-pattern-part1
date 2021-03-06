export class Window {

    protected beforeClosing(): void { };
    protected afterClosing(): void { };

    close(): void {

        this.beforeClosing();

        console.log('Window is closing');

        this.afterClosing();
    }


}