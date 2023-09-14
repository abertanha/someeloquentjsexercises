function arrayToList(arr){
    let arrFor = [];
    for( let i = 0; i < arr.length; i++){
        let newList = {
            value: arr[i],
            rest: null
       }
       arrFor[i] = newList;
       //console.log('valor do arrFor',arrFor);
    }
    for( let i = 0; i < (arr.length - 1); i++){
        arrFor[i].rest = arrFor[i + 1];
        //console.log('valor final do arrFor', arrFor);
   }
  return arrFor[0];
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
        if (i === index){
            return pointer.value;
        } 
    }
}
console.log(arrayToList([10, 20, 30]));
//console.log(listToArray(arrayToList([10, 20, 30])));