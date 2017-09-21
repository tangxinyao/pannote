export function cloneElement<T>(obj: T): T {
    const str = JSON.stringify(obj);
    return JSON.parse(str);
}
