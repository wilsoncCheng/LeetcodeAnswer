function findGCD(nums: number[]): number {
    nums = nums.sort((a, b) => {
        return a - b
    })
    let bigest: number = 1
    for (let i = nums[0]; i >= 1; i--) {
        if (nums[0] % i == 0 && nums[nums.length - 1] % i == 0) {
            return i
        }
    }
};