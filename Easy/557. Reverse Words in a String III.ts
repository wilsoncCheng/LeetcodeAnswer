function reverseWords(s: string): string {
    let splitArr: String[] = []
    splitArr = s.split(' ')
    let AnsArr: String[] = []
    for (let i = 0; i < splitArr.length; i++) {
        AnsArr.push(splitArr[i].split('').reverse().join(''))
    }
    return AnsArr.join(' ')
};