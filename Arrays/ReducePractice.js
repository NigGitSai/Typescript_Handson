var nums = [1, 2, 3, 4];
var total = nums.reduce(function (acc, curr) {
    return acc + curr;
}, 0);
console.log("total value is ".concat(total));
var words = ["hi", "hello", "ok"];
var totalWordsLength = words.reduce(function (acc, curr) {
    return acc = acc + curr.length;
}, 0);
console.log("Total words length ".concat(totalWordsLength));
var flags = [true, false, true, true, false];
var trueCount = flags.reduce(function (acc, curr) {
    return curr ? acc + 1 : acc;
}, 0);
console.log("True count : ".concat(trueCount));
var results = ["PASS", "FAIL", "PASS", "FAIL", "FAIL"];
var counts = results.reduce(function (acc, curr) {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});
console.log(counts);
