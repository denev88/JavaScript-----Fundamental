function sumDigits(num){
    var sum = 0;
    var numString = num + "";
    for ( var i = 0; i < numString.length; i++ ){
      sum = sum + Number(numString.charAt(i));
    };
    return sum;
  }
  