function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
    return arr.reduce((acc, crr, i) => {
        if (fn(crr, i)) {
            acc.push(crr)
        }
        return acc
    }, [])
};