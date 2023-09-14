function reverseArray(arr){
    let reversedArray = [];
    for(let i = 0, j = (arr.length - 1); i < arr.length; i++ , j--){
        reversedArray[i] = arr[j];
    }
    return reversedArray;
}
function reverseArrayInPlace(arr){
    let tempArray = [];
    for (let i = 0; i < (Math.floor(arr.length / 2)); i++){
            tempArray = arr[i];
            arr[i] = arr[arr.length - i - 1];
            arr[arr.length - i - 1] = tempArray;
        } 
    return arr;
}
console.log(reverseArrayInPlace([1, 3, 5, 7, 9, 11]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));