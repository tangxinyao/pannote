import { action, observable } from 'mobx';
import * as React from 'react';
import { Box } from '../box';
import { Axis } from '../resizable';

export class Picture extends Box {
    @observable public src: string;
    @observable public loading: boolean;

    private timer: any;

    constructor(type: string, axis: Axis, offsetX: number, offsetY: number, width = 128, height = 128, id?: string) {
        super(type, axis, offsetX, offsetY, width, height, id);
        this.loading = false;
    }

    @action public upload = () => {
        this.loading = true;
        this.timer = setTimeout(this.finish, 1000);
    }

    @action public finish = () => {
        this.loading = false;
        clearTimeout(this.timer);
    }
}
