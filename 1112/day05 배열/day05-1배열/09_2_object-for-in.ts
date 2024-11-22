//익명의 인터페이스
//let jack = { name: 'Jack', age: 32 }

let jack: { [index: string]: any } = { name: "Jack", age: 32 };
for (let property in jack) {
  console.log(`${property}:${jack[property]}`);
}
