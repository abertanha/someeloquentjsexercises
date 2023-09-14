function isEven(a){
    if(a < 0){
        a = a * -1;
    }
    if(a == 0){
        result = true;
    } else if(a == 1){
        result = false;
    } 
    else{
        a = a - 2;
        isEven(a);
    }
  return result;
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));