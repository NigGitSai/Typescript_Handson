const fruits: string[] = ["apple", "banana", "cherry"];
console.log(`Does banana exists in fruits array: `,fruits.includes("banana"));
const numberArr: number[] = [10, 30, 60, 90];
const greaterThanFifty = numberArr.find(num=>num>50);
console.log(greaterThanFifty)
const animals: string[] = ["cat", "dog", "cow"];
const dogIndex: number = animals.findIndex(n=>n==="dog");
console.log(`Dog Index is ${dogIndex}`);
const arr3: number[] = [3, -2, 5];
const isAnyNegativeNum : boolean = arr3.some(n=>n<0);
console.log(`Is there any negative number : ${isAnyNegativeNum}`);
const arr4: number[] = [2, 4, 6];
const allPositive: boolean= arr4.every(n=>n>0);
console.log(`All Positive numbers? : ${allPositive}`);