function countBs (string){
   let result = 0;
    for (let i = 0; i < string.length; i++){
        if(string[i] === "B"){
            result += 1;
        }
    }
  return result;
}
function countChar(string1, string2){
    let result = 0;
    for (let i = 0; i < string1.length; i++){
        if(string1[i] === string2){
            result += 1;
        }
    }
  return result;
}
   
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));