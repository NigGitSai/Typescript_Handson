const m1 = new Map<string, number>();
m1.set('A', 123);

const m2 = new Map<string, number>([['A', 123], ['B', 124]]);
const mAny = new Map();

//Copy Map
const original: Map<string,number> = new Map([['user1',1],['user2',2]]);

const copy: Map<string, number> = new Map (original);
copy.forEach((values,key)=>{
    console.log(`${key} - ${values}`);
})

//Initialize from object entries
const jsObj = { a: 1, b: 2};
const mapFromObj = new Map(Object.entries(jsObj));
console.log("===========Convert Js Object Json to MAP=========")
mapFromObj.forEach((value,key)=>{
    console.log(`${key} - ${value}`);
})
