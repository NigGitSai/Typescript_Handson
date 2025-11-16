const items = ["PASS", "FAIL", "PASS", "FAIL"];
const failCount: number = items.filter(i=>i==="FAIL").length;
console.log(`Fail Count is ${failCount}`);
const numArr:number[] = [100, 150, 200];
const numToStr = numArr.map(e=>e.toString);
const texts = [" Login ", "Logout ", " Home"];
const word: string = texts.map(w=>w.trim()).join("|");
console.log(`Words framed : ${word}`);
const buttons = ["Submit", "Cancel", "Reset"];
const canIsFound = buttons.some(btn=>btn.includes("Can"));
console.log(`Any word contain text 'can' : ${canIsFound}`);
const lengthGr4 = buttons.every(btn=>btn.length>=4);
console.log(`All words length greater than 4 : ${lengthGr4}`);
const words2: string[] = ["#login", "#logout", "#help"]
const logOutIndex = words2.findIndex(w=>w==="#logout");
words2.splice(logOutIndex,1);
console.log(`After removing logout word : ${words2}`);