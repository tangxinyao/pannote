import { action, computed, observable } from 'mobx';
import * as Util from '../../util';

export class Resizable {
    @observable public axis: string;
    @observable public width: number;
    @observable public height: number;

    constructor(axis = 'both', width = 256, height = 0) {
        this.axis = axis;
        this.width = width;
        this.height = height;
    }

    @computed public get deltaX(): number {
        const x = Util.expanding(this.width);
        return x > 0 ? x : 0;
    }

    @computed public get deltaY(): number {
        const y = Util.expanding(this.height);
        return y > 0 ? y : 0;
    }

    @action public resizeBy(deltaW: number, deltaH: number): void {
        const canDragX = this.axis === 'both' || this.axis === 'x';
        const canDragY = this.axis === 'both' || this.axis === 'y';

        if (canDragX) {
            this.width = this.width + deltaW;
        }

        if (canDragY) {
            this.height = this.height + deltaH;
        }
    }
}
