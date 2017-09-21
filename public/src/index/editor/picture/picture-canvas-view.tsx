import { observer } from 'mobx-react';
import * as React from 'react';
import { Draggable, DraggableView } from '../draggable';
import { Resizable, ResizableView } from '../resizable';

import { Store } from '../../store';
import { Picture } from './picture';

export interface IPictureCanvasView {
    picture: Picture;
    store: Store;
}

export const PictureCanvasView = observer((props: IPictureCanvasView) => {
    const { picture, store } = props;
    return (
        <DraggableView store={store} widget={picture} cancel=".react-resizable">
            <ResizableView store={store} widget={picture}>
                <div>
                    <label></label>
                    <input type="file" />
                </div>
            </ResizableView>
        </DraggableView>
    );
});
