Array.prototype.square = function(){
  let result = [];
  for (let i = 0 ;i < this.length;i++){
    result.push(this[i]*this[i]);
  }
  return result;
}


Array.prototype.cube = function(){
  let result = [];
  for (let i = 0 ;i < this.length;i++){
    result.push(this[i]*this[i]*this[i]);
  }
  return result;
}


Array.prototype.average = function(){
  if (this.length == 0) return NaN;
  let result = 0;
  for (let i = 0 ;i < this.length;i++){
    result += this[i];
  }
  return result / this.length;
}

Array.prototype.sum = function(){
  let result = 0;
  for (let i = 0 ;i < this.length;i++){
    result += this[i];
  }
  return result;
}


Array.prototype.even = function(){
  let result = [];
  for (let i = 0 ;i < this.length;i++){
    if(this[i] % 2 ==0)result.push(this[i]);
  }
  return result;
}

Array.prototype.odd = function(){
  let result = [];
  for (let i = 0 ;i < this.length;i++){
    if(this[i] % 2 !=0)result.push(this[i]);
  }
  return result;
}