//const add = (a: number): ((number) => number) => (b: number): number => a + b
const add =
  (a: number): ((arg: number) => number) =>
  (b: number): number =>
    a + b
const result = add(1)(2)
console.log(result) // 3
