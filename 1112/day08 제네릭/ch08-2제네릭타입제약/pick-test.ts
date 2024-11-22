import { pick } from "./pick";
const obj = { name: "Jane", age: 22, city: "Seoul", country: "Korea" };
console.log(pick(obj, ["city", "age"]));
// { name: 'Jane', age: 22 }
