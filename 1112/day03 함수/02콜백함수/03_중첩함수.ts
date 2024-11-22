const calc = (value: number, cb: (arg: number) => void): void => {
  //숫자값(키값) ,결과값을 출력할 문장
  let add = (a: number, b: number) => a + b; // 3

  function multiply(a: number, b: number) {
    // 3, 90
    return a * b; //3 * 30 =>90
  }

  //반환하기위해서 result선언하고 함수호출을 안에 다시 함수호출과 매개변수
  let result = multiply(add(1, 2), value);
  cb(result); // 90
};

//함수호출
//calc(30, (result: number) => console.log(`result is ${result}`)); //result is 90
//프롬프트로 값을 입력 =
calc(30, (result: number) => console.log(`당신의 몸무게는: ${result}`));
