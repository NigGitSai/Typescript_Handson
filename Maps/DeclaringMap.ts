const userRoles = new Map<string,string>();
userRoles.set("FirstName","John");
userRoles.set("LastName","Mathew");
userRoles.set("Division","A");
userRoles.set("designation","Technical Lead");
userRoles.set("experience","10 years");

console.log(`FirstName : ${userRoles.get("FirstName")}`);

console.log(`User Roles has 'Division' key ${userRoles.has('Division')}`);

console.log(`Map size ${userRoles.size}`);
//Removing data
console.log(`Remove experience ${userRoles.delete('LastName')}`);
