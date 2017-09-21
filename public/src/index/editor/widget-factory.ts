import { Arrow, Axis, Column, Note, Picture, Widget } from '../editor';

export function widgetFactory(type: string, offsetX: number, offsetY: number): Widget {
    switch (type) {
        case 'note': return new Note(type, Axis.X, offsetX, offsetY);
        case 'column': return new Column(type, Axis.X, offsetX, offsetY);
        case 'picture': return new Picture(type, Axis.Both, offsetX, offsetY);
        default: return new Note(type, Axis.Both, offsetX, offsetY);
    }
}
