function solution(str){
   let result=new Array;
  while(str!=""){
    if(str.length>1)result.push(str[0]+str[1]);
    else result.push(str[0]+'_')
    str=str.slice(2);
  }
  return result;
}