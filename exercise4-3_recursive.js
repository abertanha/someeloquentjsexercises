function arrayToList(arr){
    //condição de parada 1
    if (arr.length === 0){
        return null;
    }
    //condição de parada 2
    if (arr.length === 1){
        let newList ={
            value: arr[0],
            rest: null
        }  
        return newList;      
    }
    //chamada de recursão
    let tempBertanha = arrayToList([arr.shift()]);
    let rest = arrayToList(arr);    
    tempBertanha.rest = rest;
    return tempBertanha;
}
function listToArray(object){
    let pointer = object;
    //console.log(pointer);
    //condição de parada
    if (pointer.rest === null){
        return [pointer.value];
    }
    //chamada de recursão
    let result = listToArray(object.rest);
    let resultTemp = [pointer.value].concat(result); //chamada do valor 20
    return resultTemp;
}
function prepend(value, rest){
    let newObject ={
        newValue: value,
        newRest: rest
    }
  return newObject;
}
function nth(object, valueIndex){
    let i = valueIndex;
    let pointer2 = object;
    if (pointer2 === null){
        return;
    }
    if (i === 0){
        return pointer2.value;        
    }
    let result = nthArgument(object.rest, valueIndex - 1); 
    return result;   
}
console.log(arrayToList([10, 20, 30]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(nth(arrayToList([10, 20, 30]), 3));