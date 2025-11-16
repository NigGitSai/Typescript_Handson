const fruits:string[] = ["mango", "apple", "banana"];
fruits.sort();
console.log(`After soring ${fruits}`);

const letters: string[] =["f","B","a","M"];
const copyofLetters: string[] = [...letters];
console.log(`normal sort of letters array : ${copyofLetters.sort()}`);
letters.sort((a,b)=>a.localeCompare(b));
console.log(`Sort using locale Compare : ${letters}`);

//Numeric Sort
const nums = [20,5,10];
const numsSorted = [...nums].sort((a,b)=>a-b);

console.log(`Sort in ascending order : `+numsSorted);
//Numeric Descending Sort
const numDescending = [...nums].sort((a,b)=>b-a);
console.log(`Sorting in descending order : ${numDescending}`);

//Task 4 — reverse
const arr:string[] = ["A","B","C"];
arr.reverse();
console.log(`After reversing : ${arr}`);



