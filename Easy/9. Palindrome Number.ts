function romanToInt(s: string): number {
    let acc: number = 0
    let sArr: string[] = []
    sArr = s.split('')
    const hashTable: { [key: string]: number } = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] == 'I' && sArr[i + 1] == 'V') {
            acc += 4
            i += 1
        } else if (sArr[i] == 'I' && sArr[i + 1] == 'X') {
            acc += 9
            i += 1
        } else if (sArr[i] == 'X' && sArr[i + 1] == 'L') {
            acc += 40
            i += 1
        } else if (sArr[i] == 'X' && sArr[i + 1] == 'C') {
            acc += 90
            i += 1
        } else if (sArr[i] == 'C' && sArr[i + 1] == 'D') {
            acc += 400
            i += 1
        } else if (sArr[i] == 'C' && sArr[i + 1] == 'M') {
            acc += 900
            i += 1
        } else {
            acc += hashTable[sArr[i]]
        }
    }
    return acc
};