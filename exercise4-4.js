function deepEqual(value1, value2){
    if (value1 === value2) return true;    
    if (value1 === null || value2 === null){  
            return false;
        }
    let value1Keys = Object.keys(value1), value2Keys = Object.keys(value2);
    for (let key of value1Keys){
        if (!value2Keys.includes(key) || !deepEqual(value1[key], value2[key])){
            return false;
        }
        return true;
    }
  
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));