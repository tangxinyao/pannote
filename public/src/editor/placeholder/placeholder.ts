import { action, observable } from 'mobx';

import * as Util from '../../util';
import { Widget } from '../widget';

export class Placeholder {
    @observable public left: number;
    @observable public top: number;
    @observable public width: number;
    @observable public height: number;

    constructor(x: number, y: number, deltaX: number, deltaY: number) {
        this.left = Util.ungridding(x);
        this.top = Util.ungridding(y);
        this.width = deltaX;
        this.height = deltaY;
    }

    @action public moveTo(x: number, y: number) {
        const _left = Util.ungridding(x);
        const _top = Util.ungridding(y);

        const shouldDragX = this.left !== _left;
        const shouldDragY = this.top !== _top;

        if (shouldDragX) {
            this.left = _left;
        }

        if (shouldDragY) {
            this.top = _top;
        }

    }
}
