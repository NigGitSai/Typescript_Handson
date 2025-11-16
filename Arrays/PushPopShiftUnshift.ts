const nums:number[]=[1,2,6,5,8,9];

//push
console.log(nums.length);
nums.push(10);
console.log(nums.length);
console.log(`After adding 10 : ${nums}`);

//pop
const removed = nums.pop();
console.log(`Popped element ${removed}`);
console.log(nums.length);
console.log(`After popping : ${nums}`);

//Shift
const firstRemoved = nums.shift();
console.log(`Shifted element ${firstRemoved}`);
console.log(`After shifting : ${nums}`);

//unshift
nums.unshift(11);
console.log(`After unshifting : ${nums}`);

//Splice with removing 
console.log("Splice Removing");
console.log(`Before Spliciing : ${nums}`);
nums.splice(1,2);
console.log(`After splicing : ${nums}`);

//Splice Inserting
console.log("Splice Inserting");
console.log(`Before Splicing : ${nums}`);
nums.splice(1,0,12,15);
console.log(`After splicing : ${nums}`);

