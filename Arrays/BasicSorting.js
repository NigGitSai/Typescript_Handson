var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var fruits = ["mango", "apple", "banana"];
fruits.sort();
console.log("After soring ".concat(fruits));
var letters = ["f", "B", "a", "M"];
var copyofLetters = __spreadArray([], letters, true);
console.log("normal sort of letters array : ".concat(copyofLetters.sort()));
letters.sort(function (a, b) { return a.localeCompare(b); });
console.log("Sort using locale Compare : ".concat(letters));
//Numeric Sort
var nums = [20, 5, 10];
var numsSorted = __spreadArray([], nums, true).sort(function (a, b) { return a - b; });
console.log("Sort in ascending order : " + numsSorted);
//Numeric Descending Sort
var numDescending = __spreadArray([], nums, true).sort(function (a, b) { return b - a; });
console.log("Sorting in descending order : ".concat(numDescending));
//Task 4 — reverse
var arr = ["A", "B", "C"];
arr.reverse();
console.log("After reversing : ".concat(arr));
