var data = [1, 2, 3, 4, 5];
var middle = data.slice(2, 3);
console.log("Middle element is ".concat(middle));
var copyOfData = data.slice();
console.log("Copy of Data is : ".concat(copyOfData));
console.log("original array not changed : ".concat(data));
var a = ["a", "b"];
var b = ["c", "d"];
var c = a.concat(b);
console.log("C Array after concatination : ".concat(c));
console.log("Printing a array : ".concat(a));
//map
var nums = [2, 4, 6];
var half = nums.map(function (num) { return num / 2; });
console.log("After halfing : ".concat(half));
console.log("original nums array not changed : ".concat(nums));
//filter
var arr = [5, 12, 19, 8];
var gten = arr.filter(function (n) { return n > 10; });
console.log("Numbers greater than 10 is :".concat(gten));
//includes
var fruits = ["apple", "banana", "cherry"];
var flag = fruits.includes("banana");
console.log("Does fruits array have banana ".concat(flag));
//Join
var words = ["Test", "Automation", "Rocks"];
var joinEx = words.join(" ");
var joinEx1 = words.join("--");
console.log("words " + words);
console.log("Join Eg  ".concat(joinEx));
console.log("Join Eg 1 ".concat(joinEx1));
