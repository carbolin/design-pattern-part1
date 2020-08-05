import { Encrypt } from "./encrypt";

export class DesEncrypt implements Encrypt {

    encrypt(message: string): string {

        console.log('Encrypting message using DES');
        return 'encryptedMessage';
    }

}