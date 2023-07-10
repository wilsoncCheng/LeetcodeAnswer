function maxArea(height: number[]): number {
    let result: number = 0
    let left: number = 0
    let right: number = 0
    right = height.length - 1
    while (left <= right) {
        let smallestHeight = Math.min(height[left], height[right])
        let area = smallestHeight * (right - left)
        if (area > result) result = area

        if (height[left] > height[right]) {
            right--
        } else {
            left++
        }
    }
    return result
};