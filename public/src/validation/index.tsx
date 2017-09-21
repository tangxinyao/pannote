import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Canvas } from './canvas';
import { CanvasView } from './canvas-view';

window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;

const canvas = new Canvas(document.body.clientWidth, document.body.clientHeight, 16, ['#00b7a9', '#7c9f9a', '#ff5a00', '#ffac1c']);

const Validation = () => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <CanvasView canvas={canvas} />
        </div>
    );
};

ReactDOM.render(<Validation />, document.getElementById('root'));
