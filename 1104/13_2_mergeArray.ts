//const mergedArray1: string[] = mergeArray(["Hello"], ["World"]);

export const mergeArray = <T>(...arrays: readonly T[][]): T[] => {
  let result: T[] = []; //매개변수로 받은 배열 저장되는공간 ["Hello"], ["World"]
  for (let index = 0; index < arrays.length; index++) {
    const array: T[] = arrays[index]; // 0, 1
    result = [...result, ...array]; //["Hello", "World"],[0,1] 합치는 기능
    //[...result, ...array] = result // (["Hello", "World"],[0,1])나누는 기능
  }
  return result; //["Hello", "World"]
};
