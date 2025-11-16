var sentence = "I love Playwright";
var reversedWord = sentence.split(" ").reverse().join(" ");
console.log("Reversed word : ".concat(reversedWord));
var mixed = [1, "a", 2, "b", 3];
var onlyNumbers = mixed.filter(function (item) { return typeof item === "number"; });
var reversedNumbers = onlyNumbers.reverse();
var numIndex = 0;
var result = mixed.map(function (item) {
    if (typeof item === "number") {
        var value = reversedNumbers[numIndex];
        numIndex++;
        return value;
    }
    return item;
});
console.log("Reversed numbers along with String : ".concat(result));
