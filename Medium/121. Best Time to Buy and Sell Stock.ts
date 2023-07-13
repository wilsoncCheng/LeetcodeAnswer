function maxProfit(prices: number[]): number {
    let min: number = prices[0]
    let max: number = 0
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        max = Math.max(max, prices[i] - min)
    }
    return max
};