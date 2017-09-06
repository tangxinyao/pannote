import * as React from 'react';

import { Note, NoteCanvasView, Widget } from '../editor';
import { Store } from '../store';

export const canvasViewFactory = (store: Store) => (box: Widget): React.ReactChild => {
    if (box instanceof Note) {
        return <NoteCanvasView key={box.id} note={box as Note} store={store}/>;
    } else {
        return 'note';
    }
};
