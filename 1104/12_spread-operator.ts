//전개연산자
let array1: number[] = [1]
let array2: number[] = [2, 3]
let mergedArray: number[] = [...array1, ...array2, 4]
                           //   1          2,3     4
console.log(mergedArray) // [1, 2, 3, 4]

//...는 **전개 연산자(Spread Operator)**임. 배열이나 객체를 펼쳐서(spread) 그 내부의 요소들을 다른 배열이나 객체에 복사하거나 전달할 때 사용됨.