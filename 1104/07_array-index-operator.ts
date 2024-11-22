//인덱스 연산자
//배열이 담고 있는 아이템중 특정위치에 있는 아이템을 얻고자 할 때는 인덱스 연산자 사용
//number[index]

const number2: number[] = [1, 2, 3, 4, 5];
for (let index: number = 0; index < number2.length; index++) {
  const item: number = number2[index];
  console.log(item);
}
