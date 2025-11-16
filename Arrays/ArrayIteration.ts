const fruits = ["apple", "banana", "cherry"];

for(let i=0;i<fruits.length;i++)
{
    console.log(`index ${i} : ${fruits[i]}`);
}
// Iterate values
for(let fruit of fruits)
{
    console.log(fruit);
}
// Iterate indexes key
for(let index in fruits)
{
    console.log(index);
    console.log(fruits[index]);
}