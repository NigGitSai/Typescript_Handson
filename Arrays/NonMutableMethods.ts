const data: number[] = [1, 2, 3, 4, 5];
const middle = data.slice(2,3);
console.log(`Middle element is ${middle}`);
const copyOfData = data.slice();
console.log(`Copy of Data is : ${copyOfData}`);
console.log(`original array not changed : ${data}`)

const a:string[] = ["a","b"];
const b:string[] = ["c","d"];
const c = a.concat(b);
console.log(`C Array after concatination : ${c}`);
console.log(`Printing a array : ${a}`);

//map
const nums = [2,4,6];
const half:number[] = nums.map(num=>num/2);
console.log(`After halfing : ${half}`);
console.log(`original nums array not changed : ${nums}`);

//filter
const arr = [5,12,19,8];
const gten = arr.filter(n=>n>10);
console.log(`Numbers greater than 10 is :${gten}`);

//includes
const fruits: string[] = ["apple","banana","cherry"];
const flag = fruits.includes("banana");
console.log(`Does fruits array have banana ${flag}`);

//Join
const words = ["Test","Automation","Rocks"];
const joinEx = words.join(" ");
const joinEx1 = words.join("--");
console.log("words "+words);
console.log(`Join Eg  ${joinEx}`);
console.log(`Join Eg 1 ${joinEx1}`);