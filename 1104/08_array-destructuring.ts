//객체 뿐만 아니라 배열에 비구조화 할당을 적용할 수 있다
//배열의 비구조화 할당문에서는 []기호를 사용한다

let array2: number[] = [1, 2, 3, 4, 5];
let [first, second, third, ...rest] = array2;
console.log(first, second, third, rest); // 1,2,3,[4,5]

//...rest는 남아 있는 요소 [4, 5]를 배열로 묶어서 가져옴.
// 즉, ...rest는 "나머지 값들(rest of the elements)"을 배열 형태로 반환하도록 설계된 문법
