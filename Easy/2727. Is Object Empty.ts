function isEmpty(obj: Record<string, any> | any[]): boolean {
    for (let i in obj) {
        return false
    }
    return true

};