function oddAndEvenSum(input) {
  let inputToString = input.toString();
  let inputToStringL = inputToString.length;
  
  

  let takeOddNum = function (numAsString) {
    let oddSum = 0;
    for (let i = 0; i < inputToStringL; i++) {
      let currentOdd = Number(numAsString[i]);
      if (currentOdd % 2 !== 0) {
        oddSum += currentOdd
      }
    }
    return oddSum;
  };

  let takeEvenNum = (numAsString) => {
    let evenSum = 0;
    for(let i = 0; i < inputToStringL; i++){
      let currentEven = Number(numAsString[i]);
      if(currentEven % 2 === 0 ){
        evenSum += currentEven
      }
    }
    return evenSum;
  };
  
    console.log(`Odd sum = ${takeOddNum(inputToString)}, Even sum = ${takeEvenNum(inputToString)}`)
}


oddAndEvenSum(1000435);
