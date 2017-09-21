import { action, observable } from 'mobx';

export class Circle {
    public mx: number;
    public my: number;
    public r: number;
    public color: string;
    @observable public x: number;
    @observable public y: number;

    constructor(x: number, y: number, color: string) {
        this.mx = Math.random() - 0.5;
        this.my = Math.random() - 0.5;
        this.r = 4 + Math.random() * 2;
        this.color = color;
        this.x = x;
        this.y = y;
    }

    @action public move(w: number, h: number) {
        this.mx = (this.x < w && this.x > 0) ? this.mx : -this.mx;
        this.my = (this.y < h && this.y > 0) ? this.my : -this.my;
        this.x += this.mx;
        this.y += this.my;
    }
}
