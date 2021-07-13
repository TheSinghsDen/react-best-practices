import {average} from './average'

export function median(input: number[]): number {
    /**
     * Returns the median of an array
     * @param input e.g. [3,7,10]
     */
    const sorted = [...input].sort((a, b) => a - b)
    const half = Math.floor(sorted.length / 2)

    if (sorted.length % 2) {
        return sorted[half]
    }
    return average([sorted[half - 1], sorted[half]])
}
