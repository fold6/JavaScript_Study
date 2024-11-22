//전개연산자
let array1: number[] = [1]
let array2: number[] = [2, 3]
let mergedArray: number[] = [...array1, ...array2, 4]
                           //   1          2,3     4
console.log(mergedArray) // [1, 2, 3, 4]