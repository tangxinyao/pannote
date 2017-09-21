import { observable } from 'mobx';
import * as React from 'react';
import { Circle } from './circle';

export class Canvas {
    @observable public circles: Circle[];
    public width: number;
    public height: number;

    constructor(width: number, height: number, num: number, colors: string[]) {
        this.circles = this.init(width, height, num, colors);
        this.width = width;
        this.height = height;
        this.frame();
    }

    private init = (width: number, height: number, num: number, colors: string[]): Circle[] => {
        const circles = [];
        const len = colors.length;
        for (let i = 0; i < num; i++) {
            circles.push(new Circle(Math.random() * width, Math.random() * height, colors[i % len]));
        }
        return circles;
    }

    private frame = () => {
        const width = this.width;
        const height = this.height;
        const circles = this.circles;
        for (let i = 0; i < circles.length; i++) {
            circles[i].move(width, height);
        }
        requestAnimationFrame(this.frame);
    }
}
