// arr1 => [1,2,3,4]
// arr2 => [5,6,7,8]

//return [1,5,2,6,3,7,4,8]
interface ISolution {
  merge(arr1: number[], arr2: number[]): number[];
}
export class Solution implements ISolution {
  constructor() {}

  public merge(arr1: number[], arr2: number[]): number[] {
    const arr: number[] = []; // [1,5,2,5,6]
    let maxLength = Math.max(arr1.length, arr2.length);

    for (let i = 0; i <= maxLength; i++) {
      if (i < arr1.length) {
        arr.push(arr1[i]);
      }
      if (i < arr2.length) {
        arr.push(arr2[i]);
      }
    }

    return arr;
  }
}
