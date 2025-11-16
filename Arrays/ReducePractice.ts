const nums: number[] = [1, 2, 3, 4];
const total: number =nums.reduce((acc,curr)=>{
    return acc+curr
},0);
console.log(`total value is ${total}`);
const words = ["hi", "hello", "ok"];
const totalWordsLength: number = words.reduce((acc,curr)=>{
    return acc=acc+curr.length;
},0);
console.log(`Total words length ${totalWordsLength}`);
const flags = [true, false, true, true, false];
const trueCount = flags.reduce((acc,curr)=>{
return curr ? acc+1 : acc;
},0)
console.log(`True count : ${trueCount}`);
const results = ["PASS", "FAIL", "PASS", "FAIL", "FAIL"];
const counts = results.reduce((acc,curr)=>{
    acc[curr] = (acc[curr] || 0)+1;
    return acc;
},{} as Record<string,number>)
console.log(counts);