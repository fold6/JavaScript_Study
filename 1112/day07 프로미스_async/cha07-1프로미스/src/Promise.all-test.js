var getAllResolvedResult = function (promises) {
    return Promise.all(promises);
}; // [ true,  "hello" ]
getAllResolvedResult([
    Promise.resolve(true),
    Promise.resolve("hello"),
]).then(function (result) { return console.log(result); });
