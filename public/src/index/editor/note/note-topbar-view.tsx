import { EditorState } from 'draft-js';
import { inject, observer } from 'mobx-react';
import * as React from 'react';

import { Note } from './note';

export interface INoteTopbarProps {
    note: Note;
}

export const NoteTopbarView = inject('note')(
    observer(
        (props: INoteTopbarProps) => {
            const { note } = props;
            return (
                <div>
                    <div style={{ float: 'left', width: 'calc(100% - 3rem)' }}>
                        <InlineStyleControls
                            editorState={note.content}
                            onToggle={note.toggleInlineStyle}
                        />
                        <BlockStyleControls
                            editorState={note.content}
                            onToggle={note.toggleBlockType}
                        />
                    </div>
                </div>
            );
        })
);

interface ITypes {
    label: string;
    style: string;
}

const INLINE_STYLES: ITypes[] = [
    { label: 'fa fa-bold', style: 'BOLD' },
    { label: 'fa fa-italic', style: 'ITALIC' },
    { label: 'fa fa-underline', style: 'UNDERLINE' }
];

const BLOCK_TYPES: ITypes[] = [
    { label: 'fa fa-header', style: 'header-one' },
    { label: 'fa fa-list-ul', style: 'unordered-list-item' },
    { label: 'fa fa-list-ol', style: 'ordered-list-item' }
];

interface IButtonProps {
    active: boolean;
    key: number;
    label: string;
    onToggle: (style: string) => void;
    style: string;
}

class Button extends React.Component<IButtonProps, any> {
    public handleToggle: React.MouseEventHandler<any> = (e) => {
        e.preventDefault();
        this.props.onToggle(this.props.style);
    }

    public render() {
        const className = this.props.active ? `${this.props.label} active` : this.props.label;
        return (
            <span className="editor-icon" onMouseDown={this.handleToggle}>
                <i className={className} />
            </span>
        );
    }
}

interface IControls {
    editorState: EditorState;
    onToggle: (style: string) => void;
}

const InlineStyleControls = (props: IControls) => {
    const currentStyle = props.editorState.getCurrentInlineStyle();
    return (
        <div className="RichEditor-controls">
            {INLINE_STYLES.map((type: ITypes, index: number) =>
                <Button
                    key={index}
                    active={currentStyle.has(type.style)}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                />
            )}
        </div>
    );
};

const BlockStyleControls = (props: IControls) => {
    const { editorState } = props;
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();
    return (
        <div className="RichEditor-controls">
            {BLOCK_TYPES.map((type: ITypes, index: number) =>
                <Button
                    key={index}
                    active={type.style === blockType}
                    label={type.label}
                    onToggle={props.onToggle}
                    style={type.style}
                />
            )}
        </div>
    );
};
