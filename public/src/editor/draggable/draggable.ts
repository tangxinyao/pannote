import { action, observable } from 'mobx';
import { gridding } from '../../util';

export class Draggable {
    @observable public offsetX: number;
    @observable public offsetY: number;

    constructor(offsetX: number, offsetY: number) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
    }

    public get x(): number {
        const x = gridding(this.offsetX);
        return x > 0 ? x : 0;
    }

    public get y(): number {
        const y = gridding(this.offsetY);
        return y > 0 ? y : 0;
    }

    @action public moveBy(x: number, y: number): void {
        this.offsetX += x;
        this.offsetY += y;
    }

    @action public moveTo(x: number, y: number): void {
        this.offsetX = x;
        this.offsetY = y;
    }
}
