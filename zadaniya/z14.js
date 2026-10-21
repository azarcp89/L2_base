function isCircleSorted( arr ){
  let result = 0
  for(let i = 0 ;i < arr.length - 1;i++){
    if(arr[i] > arr[i + 1])result++
  }
  if(arr[0] < arr[arr.length-1])result++
  return result <= 1
}