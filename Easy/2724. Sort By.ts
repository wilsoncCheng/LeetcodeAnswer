function sortBy(arr: any[], fn: Function): any[] {
    return arr.sort((a, b) => {
      return  fn(a)-fn(b)
    })
};