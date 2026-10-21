function primeFactors(n){
  let result="";
  for(let i=2;i<n;i++){
    let count=0,j=i;
    while(n%i==0){
      n/=i;
      count++;
    }
    if(count!=0){
      if(count==1)result+="("+j+")";
      else result+="("+j+"**"+count+")";
    }
  }
  return result+"("+n+")";
}