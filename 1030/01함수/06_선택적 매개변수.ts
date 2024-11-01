//선택적 매개변수->함수의 매개변수에도 다음처럼 뒤에 물음표를 붙일수있다 arg?

function fn(arg?: number) {
  console.log(`arg: ${arg}`);
}

//함수호출
fn(1); //1
fn(); // undefined

type OptionalArgFunc = (arg?: number) => void;
let h: OptionalArgFunc = fn;
