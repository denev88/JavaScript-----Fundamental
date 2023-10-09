function solve(arr){

   
    
    let evenSum = 0;
    let oddSum = 0;
    let result = 0;
    

    for (const num of arr) {

        let number = Number(num)

        if (number % 2 === 0) {
            evenSum += number
           
        } else {
            oddSum += number
           
        }
        result = evenSum - oddSum
        //console.log(`${evenSum} - ${oddsum}`)
     
    }
    console.log(result)
    }
  
   
    

solve([1,2,3,4,5,6])