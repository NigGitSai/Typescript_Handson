const sentence: string =  "I love Playwright";
const reversedWord: string = sentence.split(" ").reverse().join(" ");
console.log(`Reversed word : ${reversedWord}`);
const mixed = [1, "a", 2, "b", 3];
const onlyNumbers: number[] = mixed.filter(item=> typeof item === "number");
const reversedNumbers : number[] = onlyNumbers.reverse();
let numIndex = 0;
 const result = mixed.map(item=>{
    if(typeof item === "number"){
        const value = reversedNumbers[numIndex];
        numIndex++
        return value;
    }
    return item;
 })   
 console.log(`Reversed numbers along with String : ${result}`);