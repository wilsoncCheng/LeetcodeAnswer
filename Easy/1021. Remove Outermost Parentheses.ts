function removeOuterParentheses(s: string): string {
    let start: number = 0
    let sArr: String[] = []
    let ansArr: String[] = []
    sArr = s.split('')
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] == '(') {
            start = start + 1
            if (start !== 1) {
                ansArr.push(sArr[i])
            }
        } else if (sArr[i] == ')') {
            start = start - 1
            if (start !== 0) {
                ansArr.push(sArr[i])
            }
        }
    }
    return ansArr.join('')
};