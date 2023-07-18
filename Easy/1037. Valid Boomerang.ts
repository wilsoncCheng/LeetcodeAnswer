function isBoomerang(points: number[][]): boolean {
    let point1: number[] = points[0]
    let point2: number[] = points[1]
    let point3: number[] = points[2]
    if (JSON.stringify(point1) == JSON.stringify(point2) || JSON.stringify(point1) == JSON.stringify(point3) || JSON.stringify(point3) == JSON.stringify(point2)) {
        return false
    }
    let x: number = point1[0] - point2[0]//-1
    let y: number = point1[1] - point2[1]//-2
    if ((point1[0] == point2[0] && point2[0] == point3[0]) || (point1[1] == point2[1] && point2[1] == point3[1])) {
        return false
    }
    if ((point3[0] - point2[0]) / x * y !== point3[1] - point2[1]) {
        return true
    } else {
        return false
    }
};