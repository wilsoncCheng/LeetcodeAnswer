function plusOne(digits: number[]): number[] {
    let index: number = digits.length - 1
    while (digits[index] == 9) digits[index--] = 0;
    index < 0 ? digits.unshift(1) : digits[index] = digits[index] + 1
    return digits
};