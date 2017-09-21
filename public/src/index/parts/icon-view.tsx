import * as React from 'react';
import { DraggableCore, DraggableEventHandler } from 'react-draggable';

export interface IconProps {
    type: string;
    className: string;
    onStop: (type: string, offsetX: number, offsetY: number) => void;
}

export class IconView extends React.Component<IconProps, any> {
    private x: number;
    private y: number;

    constructor(props: any) {
        super(props);
        this.state = {
            dragged: false,
            offsetX: 0,
            offsetY: 0
        };
    }

    public render() {
        return (
            <DraggableCore onDrag={this.handleDrag} onStart={this.handleStart} onStop={this.handleStop}>
                <span className="aside-icon" style={{
                    transform: 'translate(' + this.state.offsetX + 'px,' + this.state.offsetY + 'px)'
                }}>
                    <i className={this.state.dragged ? 'fa fa-circle-o' : this.props.className} />
                </span>
            </DraggableCore>
        );
    }

    public handleDrag: DraggableEventHandler = (e, data) => {
        this.setState({ offsetX: data.x - this.x, offsetY: data.y - this.y });
    }

    public handleStart: DraggableEventHandler = (e, data) => {
        this.x = data.x;
        this.y = data.y;
        this.setState({ dragged: true });
    }

    public handleStop: DraggableEventHandler = (e, data) => {
        const { onStop, type } = this.props;
        onStop(type, data.x - 184, data.y - 56);
        this.setState({ dragged: false, offsetX: 0, offsetY: 0 });
    }
}
