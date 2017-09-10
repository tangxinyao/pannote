import { EditorState, RichUtils } from 'draft-js';
import { action, observable } from 'mobx';

import { Box } from '../box';
import { Axis } from '../resizable';

export class Note extends Box {

    @observable public content: EditorState;

    constructor(type: string, axis: Axis, offsetX: number, offsetY: number, width?: number, height?: number, content?: EditorState, id?: string) {
        super(type, axis, offsetX, offsetY, width, height, id);
        this.content = content || EditorState.createEmpty();
    }

    @action public onChange = (editorState: EditorState) => {
        this.content = editorState;
    }

    @action public toggleBlockType = (blockType: string) => {
        this.onChange(
            RichUtils.toggleBlockType(
                this.content,
                blockType
            )
        );
    }

    @action public toggleInlineStyle = (inlineStyle: string) => {
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.content,
                inlineStyle
            )
        );
    }
}
