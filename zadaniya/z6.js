function toWeirdCase(string){
  let result="",index=-1;
  for(let i=0;i<string.length;i++){
    index+=1;
    if(string[i]==" ")index=-1;
    if(index%2==0)result+=string[i].toUpperCase();
    else result+=string[i].toLowerCase();
  }
  return result;
}