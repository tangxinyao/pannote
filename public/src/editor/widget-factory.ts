import { Arrow, Axis, Note, Widget } from '../editor';

export function widgetFactory(type: string, offsetX: number, offsetY: number): Widget {
    switch (type) {
        case 'note': return new Note(type, Axis.X, offsetX, offsetY);
        default: return new Note(type, Axis.Both, offsetX, offsetY);
    }
}
