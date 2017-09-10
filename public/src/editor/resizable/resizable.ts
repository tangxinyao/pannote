import { action, computed, observable } from 'mobx';
import * as Util from '../../util';

export enum Axis { Both, Null, X, Y }

export class Resizable {
    @observable public axis: Axis;
    @observable public width: number;
    @observable public height: number;
    @observable.ref public dom: HTMLDivElement;

    constructor(axis = Axis.Both, width = 256, height = 0) {
        this.axis = axis;
        this.width = width;
        this.height = height;
        this.dom = null;
    }

    @action public resizeBy(deltaW: number, deltaH: number): void {
        const canDragX = this.axis === Axis.Both || this.axis === Axis.X;
        const canDragY = this.axis === Axis.Both || this.axis === Axis.Y;

        if (canDragX) {
            this.width = this.width + deltaW;
        }

        if (canDragY) {
            this.height = this.height + deltaH;
        }
    }

    @computed public get deltaX(): number {
        const x = 32 * Math.ceil((this.dom.clientWidth + 20) / 32);
        return x;
    }

    @computed public get deltaY(): number {
        const y = 32 * Math.ceil((this.dom.clientHeight + 20) / 32);
        return y;
    }
}
