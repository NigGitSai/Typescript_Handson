const userRoles = new Map<string,string>();
userRoles.set("FirstName","John");
userRoles.set("LastName","Mathew");
userRoles.set("Division","A");
userRoles.set("designation","Technical Lead");
userRoles.set("experience","10 years");

//using for each
console.log("==========For Each===========")
userRoles.forEach((value,key)=>{
    console.log(`key ${key} : value ${value}`);
})

//using for of
console.log("====For Of loop=========")
for(const [key,value] of userRoles)
{
    console.log(`${key} : ${value}`);
}

//Iterating only keys
console.log("==========Iterating only keys===========")
for(const key1 of userRoles.keys()){
    console.log(`${key1}`);
}
//Iterating only values
console.log("==========Iterating only values===========")
for(const valuesUd of userRoles.values())
{
    console.log(`${valuesUd}`);
}
