function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    return arr.reduce((acc, crr, i) => {
        acc.push(fn(crr,i))
        return acc
    },[])
};