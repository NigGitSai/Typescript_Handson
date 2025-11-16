var nums = [1, 2, 6, 5, 8, 9];
//push
console.log(nums.length);
nums.push(10);
console.log(nums.length);
console.log("After adding 10 : ".concat(nums));
//pop
var removed = nums.pop();
console.log("Popped element ".concat(removed));
console.log(nums.length);
console.log("After popping : ".concat(nums));
//Shift
var firstRemoved = nums.shift();
console.log("Shifted element ".concat(firstRemoved));
console.log("After shifting : ".concat(nums));
//unshift
nums.unshift(11);
console.log("After unshifting : ".concat(nums));
//Splice with removing 
console.log("Splice Removing");
console.log("Before Spliciing : ".concat(nums));
nums.splice(1, 2);
console.log("After splicing : ".concat(nums));
//Splice Inserting
console.log("Splice Inserting");
console.log("Before Splicing : ".concat(nums));
nums.splice(1, 0, 12, 15);
console.log("After splicing : ".concat(nums));
