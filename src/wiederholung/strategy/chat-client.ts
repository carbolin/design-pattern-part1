import { Encryptor } from "./encryptor";

export class ChatClient {

    private _message!: string;

    constructor(private encryptor: Encryptor) { }

    public send(): void {

        const encryptedMessage = this.encryptor.encrypt(this._message);

        console.log('...sending', encryptedMessage);

    }

    set message(value: string) {

        this._message = value;
    }


}