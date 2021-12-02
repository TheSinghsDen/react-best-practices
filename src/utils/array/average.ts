export function average(input: number[]): number {
    /**
     * Returns the average of an array
     * @param input e.g. [100,50, 75]
     */
    return Math.round((input.reduce((acc, val) => acc + val, 0) / input.length) * 10) / 10
}