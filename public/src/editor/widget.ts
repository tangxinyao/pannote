import { randomUuid } from '../util';
import { Draggable } from './draggable';
import { Axis, Resizable } from './resizable';

export class Widget {
    public type: string;
    public id: string;
    public draggable: Draggable;
    public resizable: Resizable;

    constructor(type: string, axis: Axis, offsetX: number, offsetY: number, width?: number, height?: number, id?: string) {
        this.type = type;
        this.id = id || randomUuid();
        this.draggable = new Draggable(offsetX, offsetY);
        this.resizable = new Resizable(axis, width, height);
    }
}
