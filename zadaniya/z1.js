function hasTwoCubeSums(n) {

let a=0;
for(let i=1;i<Math.pow(n,(1/3));i++){
    for(let j=i+1;j<=Math.pow(n,(1/3));j++){
        if(n==Math.pow(i,3)+Math.pow(j,3)) {
            a++;
            console.log(i,"   ",j,'\n');
        }
    }
}
if(a>=2)return true;
else return false;
}