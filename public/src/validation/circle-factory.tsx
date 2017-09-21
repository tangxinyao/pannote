import { Canvas } from './canvas';
import { drawCircle } from './circle-view';
import { drawLink } from './line-view';

export const circleFactory = (context: CanvasRenderingContext2D, canvas: Canvas) => () => {
    const { width, height, circles } = canvas;
    context.clearRect(0, 0, width, height);
    for (let i = 0; i < circles.length; i++) {
        for (let j = i + 1; j < circles.length; j++) {
            drawLink(context, circles[i], circles[j]);
        }
    }
    for (let i = 0; i < circles.length; i++) {
        drawCircle(context, circles[i]);
    }
};
