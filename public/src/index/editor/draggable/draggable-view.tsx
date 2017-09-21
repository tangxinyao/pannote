import { observer } from 'mobx-react';
import * as React from 'react';
import { DraggableCore, DraggableEventHandler } from 'react-draggable';
import { Store } from '../../store';
import { Widget } from '../widget';

export interface IDraggableProps {
    children: React.ReactElement<any>;
    store: Store;
    widget: Widget;
    cancel?: string;
}

@observer
export class DraggableView extends React.Component<IDraggableProps, any> {

    public handleStart: DraggableEventHandler = () => {
        this.props.store.addPlaceholder(this.props.widget);
    }

    public handleStop: DraggableEventHandler = () => {
        const { store, widget } = this.props;
        const { x, y } = widget.draggable;
        widget.draggable.moveTo(x, y);

        store.removePlaceholder();
    }

    public handleDrag: DraggableEventHandler = (e, data) => {
        this.props.widget.draggable.moveBy(data.deltaX, data.deltaY);
    }

    public render() {
        const { cancel, store, widget } = this.props;
        const { draggable } = this.props.widget;
        const selected = store.placeholder.get() === widget;
        return (
            <DraggableCore cancel={cancel} onDrag={this.handleDrag} onStart={this.handleStart} onStop={this.handleStop}>
                <div style={{
                    backgroundColor: '#fff',
                    border: selected ? 'solid 1px #34352c' : 'solid 1px #c9cabb',
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
