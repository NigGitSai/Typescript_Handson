const fruits: string[] = ["apple", "banana", "cherry"];
const result = fruits.find(f=>f.startsWith('b'));
console.log(`find function result: ${result}`);

const findIndexResult = fruits.findIndex(f=>f.includes("cherry"));
console.log(`Find Index result : ${findIndexResult}`);

//some
const values: number[] = [5,9,13];
console.log(`values.some(v=>v>10) is ${values.some(v=>v>10)}`);
console.log(`values.some(v=>v<4) is ${values.some(v=>v<4)}`);

//every
const marks = [80, 85, 90];
console.log(`marks.every(m=>m>=50) is ${marks.every(m=>m>=50)}`);
