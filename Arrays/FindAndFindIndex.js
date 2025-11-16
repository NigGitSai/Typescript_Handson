var fruits = ["apple", "banana", "cherry"];
var result = fruits.find(function (f) { return f.startsWith('b'); });
console.log("find function result: ".concat(result));
var findIndexResult = fruits.findIndex(function (f) { return f.includes("cherry"); });
console.log("Find Index result : ".concat(findIndexResult));
//some
var values = [5, 9, 13];
console.log("values.some(v=>v>10) is ".concat(values.some(function (v) { return v > 10; })));
console.log("values.some(v=>v<4) is ".concat(values.some(function (v) { return v < 4; })));
//every
var marks = [80, 85, 90];
console.log("marks.every(m=>m>=50) is ".concat(marks.every(function (m) { return m >= 50; })));
