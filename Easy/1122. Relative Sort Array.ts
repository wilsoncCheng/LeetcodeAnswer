function relativeSortArray(inputArray: number[], sortingOrder: number[]): number[] {
    const sortingOrderMap: Map<number, number> = new Map()
    for (let i = 0; i < sortingOrder.length; i++) {
        sortingOrderMap.set(sortingOrder[i], i)
    }

    return inputArray.slice().sort((a, b) => {
        if (a == b) return 0
        if (sortingOrderMap.has(a) && sortingOrderMap.has(b)) {
            return sortingOrderMap.get(a) - sortingOrderMap.get(b)
        }
        if (sortingOrderMap.has(a)) {
            return -1
        }
        if (sortingOrderMap.has(b)) {
            return 1
        }
        return a - b
    })
};