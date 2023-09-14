function arrayToList(arr){
    let root = null;
    let pointer = null;
    for( let i = 0; i < arr.length; i++){
        //console.log('iteração no.', i);
        let newList = {
            value: arr[i],
            rest: null
        }
        //console.log('valor do pointer inicial por iteração', pointer);
        if (root === null){     
            root = newList;
        }
        if (pointer != null){
            pointer.rest = newList;
        }
        pointer = newList;
        //console.log('valor do pointer final por iteração', pointer);
        //console.log('valor do root final por iteração', root);
    }
  return root;
}
function listToArray(objectList){
    let arr = [];
    for (let pointer = objectList, i = 0; pointer != null; pointer = pointer.rest, i++){
        arr[i] = pointer.value;
    }
    return arr;
}
function nth(object, index){
    let pointer = object;
    for (let i = 0; pointer != null, i <= index ;pointer = pointer.rest, i++){
        if (pointer === null){
            return "Index inválido";
        }else if (i === index){
            return pointer.value;
        } 
    }
}

console.log(arrayToList([10, 20, 30]));
//console.log(listToArray(arrayToList([10, 20, 30])));
//console.log(nth(arrayToList([10, 20, 30]), 2));