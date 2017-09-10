import { observer } from 'mobx-react';
import * as React from 'react';
import { DraggableCore, DraggableEventHandler } from 'react-draggable';
import { Store } from '../../store';
import * as Util from '../../util';
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
        this.props.store.addPlaceholder(this.props.widget);
    }

    public handleStop: DraggableEventHandler = () => {
        const { store, widget } = this.props;
        const { x, y } = store.placeholder.get().draggable;

        widget.draggable.moveTo(x, y);
        store.removePlaceholder();
    }

    public handleDrag: DraggableEventHandler = (e, data) => {
        const draggable = this.props.widget.draggable;
        draggable.moveBy(data.deltaX, data.deltaY);
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
