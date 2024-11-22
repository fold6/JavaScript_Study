import { Bird, Fish } from "./BirdAndFish";
import { isFlyable } from "./isFlyable";
import { isSwimmable } from "./isSwimmable";

export const swimOrFly = (o: Fish | Bird) => {
  //
  if (isSwimmable(o)) o.swim();
  else if (isFlyable(o)) o.fly();
};
//instanceof 연산자
//객체 instanceof 타입  --> boolean 타입의 값을 반환
//객체가 어떤 클래스인지, 어떤 클래스를 상속받았는지 확인하는데 사용하는 연산자
//타입가드기능을 하는 함수는 함수의 반환타입부분에 is 이름의 연산자를 사용
//타입가드는 타입을 변환하지 않은 코드 때문에 프로그램이 비정상으로 종료되는 상황을 보호해 준다는 의미
