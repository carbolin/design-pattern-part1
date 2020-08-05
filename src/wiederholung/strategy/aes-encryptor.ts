import { Encryptor } from "./encryptor";

export class AesEncryptor implements Encryptor {

    encrypt(message: string): string {

        console.log('Encrypting message with AES');
        return 'AES encrypted message';

    }

}
