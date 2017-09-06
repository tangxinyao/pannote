import * as React from 'react';

import { Note, NoteTopbarView, Widget } from '../editor';
import { Store } from '../store';

export const topbarViewFactory = (widget: Widget): React.ReactChild => {
    if (widget instanceof Note) {
        return <NoteTopbarView note={widget as Note} />;
    } else {
        return <span style={{
            color: '#eb3f2f',
            float: 'left',
            fontWeight: 'bold',
            letterSpacing: '1px',
            padding: '1rem',
            textShadow: '0 0 1px #b31800'
        }}>My Pannote Pannal</span>;
    }
};
