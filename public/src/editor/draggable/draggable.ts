import { action, computed, observable } from 'mobx';

export class Draggable {
    @observable public offsetX: number;
    @observable public offsetY: number;

    constructor(offsetX: number, offsetY: number) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
    }

    @computed public get x(): number {
        const offsetX = this.offsetX;
        return offsetX > 0 ? 32 * Math.round(offsetX / 32) : 0;
    }

    @computed public get y(): number {
        const offsetY = this.offsetY;
        return offsetY > 0 ? 32 * Math.round(offsetY / 32) : 0;
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
