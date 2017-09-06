import { observable } from 'mobx';
import { Widget } from '../widget';

export class Arrow extends Widget {
    @observable public from: Widget;
    @observable public to: Widget;

    constructor(type: string, axis: string, offsetX: number, offsetY: number, from?: Widget, to?: Widget, width?: number, height?: number, id?: string) {
        super(type, axis, offsetX, offsetY, width, height, id);
        this.from = from || null;
        this.to = to || null;
    }
}
