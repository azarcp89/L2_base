function longest(arr, n) {
  for(let i = 0;i < arr.length ;i++){
    for(let j = 0;j < arr.length - i - 1;j++){
      if(arr[j].length < arr[j + 1].length){
        [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]];
      }
    }
  }
  console.log(arr);
  return arr[n - 1];
}