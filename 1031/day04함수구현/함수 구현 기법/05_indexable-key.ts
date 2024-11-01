//const makeObject = (key, value) => ({ [key]: value })
export type KeyValueType = { [key: string]: string }; //{[name: string]}

export const makeObject = (key: string, value: string): KeyValueType => ({
  [key]: value,
});

console.log(makeObject("name", "Jack")); //{ name: 'Jack' }
console.log(makeObject("firstName", "Jane")); //{firstName:'Jane'}

//타입스크립트에서는{[key]:value}형태의 타입을 색인가능타입이라고함
