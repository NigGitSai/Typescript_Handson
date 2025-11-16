var cities = ["London", "Paris", "Tokyo"];
var afterJoin = cities.join("--");
console.log("cities not chnaged : ".concat(cities));
console.log("afterJoin : ".concat(afterJoin));
//Task 2 — split
var csv = "Selenium,Cypress,Playwright";
var tools = csv.split(",");
console.log(tools);
//trim & map
var messy = "  cat ,  dog , cow ";
var final = messy.split(",").map(function (n) { return n.trim(); });
console.log(final);
var texts = ["Name", "Email", "Phone"];
var result = texts.join("|");
console.log(result);
