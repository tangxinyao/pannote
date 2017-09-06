import { observer } from 'mobx-react';
import * as React from 'react';
import { DraggableCore, DraggableEventHandler } from 'react-draggable';
import { Store } from '../../store';
import * as Util from '../../util';
import { Placeholder } from '../placeholder';
import { Widget } from '../widget';

export interface IDraggableProps {
    children: React.ReactElement<any>;
    store: Store;
    widget: Widget;
    cancel?: string;
}

@observer
export class DraggableView extends React.Component<IDraggableProps, any> {

    public dom: HTMLDivElement = null;

    public handleStart: DraggableEventHandler = () => {
        const { x, y } = this.props.widget.draggable;
        const deltaX = this.dom.clientWidth;
        const deltaY = this.dom.clientHeight;

        const placeholder = new Placeholder(x, y, deltaX, deltaY);
        this.props.store.addPlaceholder(placeholder);
    }

    public handleStop: DraggableEventHandler = () => {
        const { store } = this.props;
        const { draggable } = this.props.widget;
        const placeholder = store.placeholder.get();

        draggable.moveTo(placeholder.left, placeholder.top);
        store.removePlaceholder();
    }

    public handleDrag: DraggableEventHandler = (e, data) => {
        const draggable = this.props.widget.draggable;
        draggable.moveBy(data.deltaX, data.deltaY);

        const placeholder = this.props.store.placeholder.get();
        placeholder.moveTo(draggable.x, draggable.y);
    }

    public updateDOM = (dom: HTMLDivElement) => {
        this.dom = dom;
    }

    public render() {
        const { cancel, widget } = this.props;
        const { draggable } = this.props.widget;
        return (
            <DraggableCore cancel={cancel} onDrag={this.handleDrag} onStart={this.handleStart} onStop={this.handleStop}>
                <div ref={this.updateDOM} style={{
                    backgroundColor: '#fff',
                    border: 'solid 1px #34352c',
                    boxSizing: 'border-box',
                    cursor: 'move',
                    left: draggable.offsetX,
                    position: 'absolute',
                    top: draggable.offsetY,
                    zIndex: 1
                }}>
                    {this.props.children}
                </div>
            </DraggableCore>
        );
    }
}
