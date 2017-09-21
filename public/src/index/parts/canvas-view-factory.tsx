import * as React from 'react';

import { Column, ColumnCanvasView, Note, NoteCanvasView, Picture, PictureCanvasView, Widget } from '../editor';
import { Store } from '../store';

export const canvasViewFactory = (store: Store) => (widget: Widget): React.ReactChild => {
    if (widget instanceof Note) {
        return <NoteCanvasView key={widget.id} note={widget as Note} store={store} />;
    } else if (widget instanceof Column) {
        return <ColumnCanvasView key={widget.id} column={widget as Column} store={store} />;
    } else if (widget instanceof Picture) {
        return <PictureCanvasView key={widget.id} picture={widget as Picture} store={store} />;
    } else {
        return 'note';
    }
};
