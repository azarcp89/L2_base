function expandedForm(num) {
  let result="",b;
  let len=String(num).length;
  for(let i=len-1;i>=0;i--){
    b=(Math.floor(num/Math.pow(10,i)))*Math.pow(10,i)
    if(b!=0)result+=(b+" + ");
    num-=b;
  }
  result=result.slice(0,result.length-3);
  return result;
}