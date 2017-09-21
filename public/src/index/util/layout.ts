import { Container } from '../editor';
import { } from '../store';

let _layout: Container[];

export function snapshot(layout: Container[]) {
    _layout = layout;
}

function collides(l1: Container, l2: Container): boolean {
    if (l1 === l2) { return false; } // same element
    if (l1.draggable.x + l1.resizable.deltaX < l2.draggable.x) { return false; } // l1 is left of l2
    if (l1.draggable.x > l2.draggable.x + l2.resizable.deltaX) { return false; } // l1 is right of l2
    if (l1.draggable.y + l1.resizable.deltaY < l2.draggable.y) { return false; } // l1 is above l2
    if (l1.draggable.y > l2.draggable.y + l2.resizable.deltaY) { return false; } // l1 is below l2
    return true; // containers overlap
}

function getAllCollisions(layoutItem: Container): Container[] {
    return _layout.filter((l) => collides(l, layoutItem));
}

export function moveFromCollision(layoutItem: Container) {
    const collisions = getAllCollisions(layoutItem);
    console.log(collisions);
}
