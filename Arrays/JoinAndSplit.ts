const cities: string[] = ["London", "Paris", "Tokyo"];
const afterJoin = cities.join("--");
console.log(`cities not chnaged : ${cities}`);
console.log(`afterJoin : ${afterJoin}`);

//Task 2 — split
const csv = "Selenium,Cypress,Playwright";
const tools = csv.split(",");
console.log(tools);

//trim & map
const messy = "  cat ,  dog , cow ";
const final: string[] = messy.split(",").map(n=>n.trim());
console.log(final);

const texts = ["Name", "Email", "Phone"];
const result = texts.join("|");
console.log(result);