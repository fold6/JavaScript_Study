export const pureDelete = <T>(
  array: readonly T[],
  cb: (val: T, index?: number) => boolean
): T[] => array.filter((val, index) => cb(val, index) == true);
//{ name: "Jack" },{ name: "Jane", age: 32 },
