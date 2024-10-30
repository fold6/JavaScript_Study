const dog = class {
  //속성들 데이터타입선언
  name: string;
  color: string;
  age: number;
  family: string;

  constructor(name: string, color: string, age: number) {
    //this는 현재 클래스
    this.name = name;
    this.age = age;
    this.color = color;
    this.family = "포메리안";
  }
  //생략가능
  play() {
    return `${this.name}가 즐겁게 놉니다`;
  }
};

//객체생성
const rucy = new dog("루시", "흰색", 10);
