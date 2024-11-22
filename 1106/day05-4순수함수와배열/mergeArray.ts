export const mergeArray = <T>(...arrays: readonly T[][]): T[] => {
  let result: T[] = []; //배열을 합치는 공간
  for (let index = 0; index < arrays.length; index++) {
    const array: T[] = arrays[index];
    result = [...result, ...array]; //비구조화 할당
  }
  return result;
};
