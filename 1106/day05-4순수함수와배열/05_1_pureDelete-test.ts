import { pureDelete } from "./05_pureDelete";

const mixedArray: object[] = [
  //여러가지속성의배열요소들
  [],
  { name: "Jack" },
  { name: "Jane", age: 32 },
  ["description"],
];

//배열을 삭제
const objectsOnly: object[] = pureDelete(mixedArray, (val) =>
  Array.isArray(val)
);
//console.log(mixedArray, objectsOnly);
console.log(objectsOnly);
