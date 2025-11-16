const cart = ["Apple", "Banana"];
cart.push('Orange');
cart.shift();
console.log(`Cart Array : ${cart}`);
const numArr: number[] = [10, 20, 30, 40];
numArr.pop();
numArr.unshift(5);
console.log(`Number Array : ${numArr}`);
const aArr: number[]=[1,2];
const numArr2: number[]=aArr.concat(3,4);
numArr2.shift();
numArr2.pop();
console.log(`Number Array 2 elements : ${numArr2}`);

