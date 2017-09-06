import { Arrow, Note, Widget } from '../editor';

export function widgetFactory(type: string, offsetX: number, offsetY: number): Widget {
    switch (type) {
        case 'note': return new Note(type, 'x', offsetX, offsetY);
        default: return new Note(type, 'both', offsetX, offsetY);
    }
}
