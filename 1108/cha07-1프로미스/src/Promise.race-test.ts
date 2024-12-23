Promise.race([Promise.resolve(true), Promise.resolve("hello")]).then((value) =>
  console.log(value)
);

Promise.race([Promise.resolve(true), Promise.reject(new Error("hello"))])
  .then((value) => console.log(value)) // true
  .catch((error) => console.log(error.message)); // 호출되지 않습니다

Promise.race([Promise.reject(new Error("error")), Promise.resolve(true)])
  .then((value) => console.log(value)) // 호출되지 않습니다
  .catch((error) => console.log(error.message)); // error
