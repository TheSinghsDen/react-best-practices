export function isObjectEmpty(obj: Record<string, any>): boolean {
    return obj && Object.keys(obj).length === 0 && obj.constructor === Object
}