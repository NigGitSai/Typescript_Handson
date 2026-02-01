var userRoles = new Map();
userRoles.set("FirstName", "John");
userRoles.set("LastName", "Mathew");
userRoles.set("Division", "A");
userRoles.set("designation", "Technical Lead");
userRoles.set("experience", "10 years");
console.log("FirstName : ".concat(userRoles.get("FirstName")));
console.log("User Roles has 'Division' key ".concat(userRoles.has('Division')));
console.log("Map size ".concat(userRoles.size));
//Removing data
console.log("Remove experience ".concat(userRoles.delete('LastName')));
