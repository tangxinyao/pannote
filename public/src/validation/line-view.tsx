import { Circle } from './circle';

export const drawLink = (context: CanvasRenderingContext2D, c1: Circle, c2: Circle) => {
    const dx = c1.x - c2.x;
    const dy = c1.y - c2.y;
    if (Math.sqrt(dx * dx + dy * dy) < 128) {
        context.beginPath();
        context.moveTo(c1.x, c1.y);
        context.lineTo(c2.x, c2.y);
        context.closePath();
        context.strokeStyle = '#dbdbdb';
        context.stroke();
    }
};
