import { Editor, EditorState } from 'draft-js';
import { observer } from 'mobx-react';
import * as React from 'react';
import { DraggableView } from '../draggable';
import { ResizableView } from '../resizable';

import { Store } from '../../store';
import { Note } from './note';

export interface INoteCanvasView {
    note: Note;
    store: Store;
}

@observer
export class NoteCanvasView extends React.Component<INoteCanvasView, any> {

    public render() {
        const { note, store } = this.props;
        return (
            <DraggableView store={store} widget={note} cancel=".react-resizable">
                <ResizableView store={store} widget={note}>
                    <Editor editorState={note.content} onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange} />
                </ResizableView>
            </DraggableView>
        );
    }

    public handleBlur: any = () => {
        this.props.store.deselect(this.props.note);
    }

    public handleChange: (editorState: EditorState) => void = (editorState) => {
        const { onChange } = this.props.note;
        onChange(editorState);
    }

    public handleFocus: any = () => {
        this.props.store.select(this.props.note);
    }
}
