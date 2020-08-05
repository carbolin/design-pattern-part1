export class Window {

    protected beforeClosing(): void {};
    protected afterClosing(): void {};

    close(): void {

        this.beforeClosing();

        console.log('closing window');

        this.afterClosing();
    }

}
