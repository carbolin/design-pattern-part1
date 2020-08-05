import { Compressor } from "./compressor";

export class PngCompressor implements Compressor {

    compress(): void {

        console.log('Image was PNG compressed');
        
    }
    
}