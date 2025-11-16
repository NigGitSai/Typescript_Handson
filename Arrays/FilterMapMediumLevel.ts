const numArr: number[] = [1, 5, 8, 12, 20];
const newNumArr: number[] = numArr.filter(n=>n%2===0).map(n=>n*10);
console.log(`New Number Array : ${newNumArr}`)
const tools: string[] = ["Playwright", "Selenium", "Cypress", "TestCafe"];
const filteredTools: string[] = tools.filter(e=>!e.includes("e"));
console.log(`Filtered tools not having letter e : ${filteredTools}`);
const numArr2: number[] = [100, 200, 50, 300];
const greaterThan150 = numArr2.find(num=>num>150);
console.log(`First number greater than 150 : ${greaterThan150}`);
const indexOfNumGr150: number = numArr2.findIndex(num=>num>150);
console.log(`Index of number greater than 150: ${indexOfNumGr150}`);
const allPositive: boolean = numArr2.every(num=>num>0);
console.log(`Are all numbers positive in number Array 2: ${allPositive}`)