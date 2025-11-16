var fruits = ["apple", "banana", "cherry"];
for (var i = 0; i < fruits.length; i++) {
    console.log("index ".concat(i, " : ").concat(fruits[i]));
}
// Iterate values
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
// Iterate indexes key
for (var index in fruits) {
    console.log(index);
    console.log(fruits[index]);
}
