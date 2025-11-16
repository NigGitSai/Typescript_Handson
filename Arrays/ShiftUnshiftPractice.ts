const alphabets: string[] = ["a", "b", "c"];
alphabets.shift();
console.log(`After shifting : ${alphabets}`);
const arr1: number[] = [10,20];
arr1.unshift(5);
arr1.shift();
console.log(`Number Array 1 : ${arr1}`);
const mixArray: (number|string)[] = [1,2,3];
mixArray.unshift("x","y");
console.log(`Mixed Array after unshifting x and y is ${mixArray}`);

