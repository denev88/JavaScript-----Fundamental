function solve (arr){
    let sum = 0;

    for (let arrEven of arr){
        let number= Number(arrEven)
        if(number % 2 === 0){
        sum += number      
        }
    }
    console.log(sum)
}
solve(['1','2','3','4','5','6'])