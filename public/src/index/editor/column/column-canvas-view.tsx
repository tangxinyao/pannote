import { observer } from 'mobx-react';
import * as React from 'react';

import { Store } from '../../store';
import { DraggableView } from '../draggable';
import { ResizableView } from '../resizable';
import { Column } from './column';

export interface IColumnProps {
    store: Store;
    column: Column;
}

export const ColumnCanvasView = observer((props: IColumnProps) => {
    const { column, store } = props;
    return (
        <DraggableView store={store} widget={column} cancel=".react-resizable">
            <ResizableView store={store} widget={column}>
                <div style={{ backgroundColor: '#fff', border: 'dashed 1px #c9cabb', boxSizing: 'border-box', margin: '5px', minHeight: '16px' }}></div>
            </ResizableView>
        </DraggableView >
    );
});
