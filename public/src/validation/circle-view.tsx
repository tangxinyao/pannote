import { Circle } from './circle';

export const drawCircle = (context: CanvasRenderingContext2D, circle: Circle): void => {
    context.beginPath();
    context.arc(circle.x, circle.y, circle.r, 0, 360);
    context.closePath();
    context.fillStyle = circle.color;
    context.fill();
};
