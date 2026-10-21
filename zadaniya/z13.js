function SearchNumericValue(c){
  
  if (c >= '0'&& c <= '9')return parseInt(c);
  else {
    return c.toUpperCase().charCodeAt(0)-55;
  }
}

function hexStringToRGB(hexString) {
  return {
    "r":SearchNumericValue(hexString[1]) * 16 + SearchNumericValue(hexString[2]),
    "g":SearchNumericValue(hexString[3]) * 16 + SearchNumericValue(hexString[4]),
    "b":SearchNumericValue(hexString[5]) * 16 + SearchNumericValue(hexString[6])
  }
}
