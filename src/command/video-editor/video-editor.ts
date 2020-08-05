
export class VideoEditor {

    private _contrast!: number;
    private _label!: string;

    get contrast(): number {

        return this._contrast;
    }

    set contrast(value: number) {

        this._contrast = value;
    }

    get label(): string {

        return this._label;
    }

    set label(value: string) {

        this._label = value;
    }

       toString(): void {

        console.log(`Video: ${this.label}, contrast: ${this.contrast}`);
    }
}