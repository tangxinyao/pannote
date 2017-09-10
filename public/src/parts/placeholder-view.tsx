import { observer } from 'mobx-react';
import * as React from 'react';
import { Widget } from '../editor/widget';

export interface IPlaceholderProps {
    placeholder: Widget;
}

export const PlaceholderView = observer((props: IPlaceholderProps) => {
    const { x, y } = props.placeholder.draggable;
    const { deltaX, deltaY } = props.placeholder.resizable;
    return (
        <div style={{ border: 'dashed 1px #c9cabb', boxSizing: 'border-box', height: deltaY, left: x, position: 'absolute', top: y, width: deltaX, zIndex: 0 }}></div>
    );
});
