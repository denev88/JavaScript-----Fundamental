function solve(num1, num2, num3) {
    let sum = num1 + num2 + num3
    let result = sum % 1 === 0 ? sum+= ' - integer' : sum+=' - float'
    console.log(result);
}
solve(9, 100, 1.1)
solve(100, 200, 303)