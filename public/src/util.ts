import * as v4 from 'uuid/v4';

export function cloneElement<T>(obj: T): T {
    const str = JSON.stringify(obj);
    return JSON.parse(str);
}

export function gridding(num: number): number {
    return Math.round(num / 32);
}

export function expanding(num: number): number {
    return Math.ceil(num / 32);
}

export function randomUuid() {
    return v4();
}

export function ungridding(num: number): number {
    return num * 32;
}
