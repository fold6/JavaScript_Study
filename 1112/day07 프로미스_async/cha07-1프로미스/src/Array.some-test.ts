const isAnyTrue = (values: boolean[]) => values.some((value) => value == true);

console.log(
  isAnyTrue([false, true, false]), // true
  isAnyTrue([false, false, false]) // false
);

//promise.race는 크랠스 메서드는 배열에 담긴 프로세스 객체중에 하나라도 해소되면.
//이 값을 담은 promise.resolve개체로 변환
//만약 거절값이 먼저 발생하여 promise.reject객체로 변환
