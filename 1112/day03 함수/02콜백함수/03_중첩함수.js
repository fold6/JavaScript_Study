var calc = function (value, cb) {
    //숫자값(키값) ,결과값을 출력할 문장
    var add = function (a, b) { return a + b; }; // 3
    function multiply(a, b) {
        // 3, 90
        return a * b; //3 * 30 =>90
    }
    //반환하기위해서 result선언하고 함수호출을 안에 다시 함수호출과 매개변수
    var result = multiply(add(1, 2), value);
    cb(result); // 90
};
//함수호출
//calc(30, (result: number) => console.log(`result is ${result}`)); //result is 90
//프롬프트로 값을 입력 =
calc(30, function (result) { return console.log("\uB2F9\uC2E0\uC758 \uBAB8\uBB34\uAC8C\uB294: ".concat(result)); });
