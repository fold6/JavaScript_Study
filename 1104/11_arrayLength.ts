//제네릭
//배열을 다루는 함수를 작성할때 number[]와 같이 타입이 고정된 함수를 만들기 보다는
//T[]형태로 배열 아이템을 표현하는 것이 편리하다
//타입을 T와 같은 일종의 변수로 취급하는 것을 제네릭타입이라고 한다
//따라서 타입을 직접적으로 고정된 값으로 명시하지말고 '변수' 를 통해 언제든지 변할 수 있는
//타입을 통해 보다 유연하게 코딩을 할 수 있는
//장치가 필요한데 이것이 바로 오늘 다룰 제네릭(generic) 타입이다.

//const arrayLength = (array)=> array.length
//arrayLength함수는 배열의 길이를 구하는 함수
//이 함수가 number[],string[], .iPerson[]등을 다양한 아이템 타입을 가지는 배열에
//똑같이 적용하려면 다음처럼 배열의 타입주석 T[]로 표현하면
//const arrayLength = (array:T[]):number=> array.length
export const arrayLength = <T>(array: T[]): number => array.length;
export const isEmpty = <T>(array: T[]): boolean => arrayLength(array) == 0;

//제네릭은 원래 C#, Java 등의 언어에서 재사용성이 높은 컴포넌트를 만들 때 자주 활용되는 타입이다. 특히, 한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 사용된다.
//실제로 타입스크립트 라이브러리의 메소드 타입 형태를 보면 모두 제네릭으로 이루어져 있다.
//타입을 직접적으로 고정된 값으로 명시하지말고 '변수' 를 통해 언제든지 변할 수 있는 타입을 통해 보다 유연하게 코딩을 할 수 있는 장치가 필요한데 이것이 바로 오늘 다룰 제네릭(generic) 타이다.
