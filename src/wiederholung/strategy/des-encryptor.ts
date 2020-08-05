import { Encryptor } from "./encryptor";

export class DesEncryptor implements Encryptor {

    encrypt(message: string): string {

        console.log('Encrypting message with DES');
        return 'DES encrypted message';

    }

}
