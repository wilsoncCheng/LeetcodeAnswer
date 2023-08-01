function chunk(arr: any[], size: number): any[][] {
    let chunk: any[] = [];
    let ans: any[][] = [];

    for (let i = 0; i < arr.length; i += size) {
        chunk = arr.slice(i, i + size);
        ans.push(chunk);
    }

    return ans;
};
