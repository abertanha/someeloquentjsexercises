function range(first, last, step){
    let arrayResult = [];
    if (step === 0 || step === undefined){
    arrayResult[0] = first;
        for (let i = 1; i < last; i++){
            arrayResult[i] = arrayResult[0] + i;
        }
    }else if (step < 0){
        for (let i = first; i >= last; i += step){
            arrayResult.push(i);
         }
    }else{
        for (let i = first; i <= last; i -= step){
            arrayResult.push(i);
        }
    }
  return arrayResult;
}
function arraySum(arr){
    let sum = 0;
        for (let i = 0; i < arr.length; i++){
            sum += arr[i];
        }
    return sum;
}
console.log(range(1, 10));
console.log(range(5,2,-1));
console.log(arraySum(range(1, 10)));
