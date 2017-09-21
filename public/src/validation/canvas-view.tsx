import { autorun, IReactionDisposer } from 'mobx';
import * as React from 'react';
import { Canvas } from './canvas';
import { circleFactory } from './circle-factory';

interface ICanvasViewProps {
    canvas: Canvas;
}

export class CanvasView extends React.Component<ICanvasViewProps, any> {
    private dom: HTMLCanvasElement;
    private disposer: IReactionDisposer;

    public componentDidMount() {
        this.disposer = autorun(circleFactory(this.dom.getContext('2d'), this.props.canvas));
    }

    public componentWillUnmount() {
        this.disposer();
    }

    public render() {
        const { width, height } = this.props.canvas;
        return <canvas ref={this.ref} width={width} height={height} style={{ position: 'absolute', width: '100%', height: '100%' }}></canvas>;
    }

    private ref: React.Ref<HTMLCanvasElement> = (dom) => {
        this.dom = dom;
    }
}
