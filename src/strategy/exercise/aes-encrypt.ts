import { Encrypt } from "./encrypt";

export class AesEncrypt implements Encrypt {

    encrypt(message: string): string {

        console.log('Encrypting message using AES');
        return 'encryptedMessage';
    }

}