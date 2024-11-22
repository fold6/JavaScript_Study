export const test1 = async () => {
  let value = await "hello";
  console.log(value); // hello
  value = await Promise.resolve("hello");
  console.log(value); //hello
};
