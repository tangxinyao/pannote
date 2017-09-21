import { observer } from 'mobx-react';
import * as React from 'react';
import { DraggableCore, DraggableEventHandler } from 'react-draggable';

import { Store } from '../../store';
import { Widget } from '../widget';

interface IResizableProps {
    widget: Widget;
    store: Store;
    children: React.ReactElement<any>;
}

@observer
export class ResizableView extends React.Component<IResizableProps, any> {
    private dom: HTMLDivElement = null;

    public handleDrag: DraggableEventHandler = (e, data) => {
        const { deltaX, deltaY } = data;
        this.props.widget.resizable.resizeBy(deltaX, deltaY);
    }

    public ref: React.Ref<HTMLDivElement> = (dom) => {
        this.props.widget.resizable.dom = dom;
    }

    public render() {
        const { store, widget } = this.props;
        const { width, height } = widget.resizable;
        const selected = store.selection.get() === widget;
        return (
            <div ref={this.ref} className="react-resizable" style={{ width, height: height ? height : null }}>
                {this.props.children}
                <DraggableCore onDrag={this.handleDrag} grid={[32, 32]}>
                    <span className="react-resizable-handle" />
                </DraggableCore>
            </div>
        );
    }
}
