import { Encrypt } from "./encrypt";

export class ChatClients {

    constructor(private encrypt: Encrypt) {}

    send(message: string) {

        const encryptedMessage = this.encrypt.encrypt(message);
        console.log('...sending encrypted message');
        
    }
}