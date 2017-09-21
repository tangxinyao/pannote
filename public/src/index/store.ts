import { action, IObservableArray, IObservableValue, observable } from 'mobx';

import { Arrow, Box, Container, Widget } from './editor';

import { snapshot } from './util';

export class Store {
    public arrows: IObservableArray<Arrow> = observable([]);
    public boxes: IObservableArray<Box> = observable([]);
    public containers: IObservableArray<Container> = observable([]);
    public selection: IObservableValue<Box> = observable.box(null);
    public placeholder: IObservableValue<Box> = observable.box(null);

    @action public addWidget(widget: Widget): void {
        if (widget instanceof Arrow) {
            this.arrows.push(widget);
        } else if (widget instanceof Box) {
            this.boxes.push(widget);
        } else if (widget instanceof Container) {
            this.containers.push(widget);
        }
        this.boxes.map((box: Widget) => console.log(box));
        this.containers.map((container: Widget) => console.log(container));
    }

    @action public removeWidget(widget: Widget): void {
        if (widget instanceof Arrow) {
            this.arrows.remove(widget);
        } else if (widget instanceof Box) {
            this.boxes.remove(widget);
        } else if (widget instanceof Container) {
            this.containers.remove(widget);
        }
    }

    @action public select(widget: Widget): void {
        if (this.selection.get() !== widget) {
            this.selection.set(widget);
        }
    }

    @action public deselect(widget: Widget): void {
        if (this.selection.get() === widget) {
            this.selection.set(null);
        }
    }

    @action public addPlaceholder(placeholder: Box): void {
        snapshot(this.containers);
        this.placeholder.set(placeholder);
    }

    @action public removePlaceholder(): void {
        this.placeholder.set(null);
    }
}
