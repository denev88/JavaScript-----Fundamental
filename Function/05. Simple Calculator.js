function calculate(a, b, calc) {
  let sum = 0;
  //switch (calc) {
  // case "multiply":
  //   let multiply = (a, b) => a * b;
  //   console.log(multiply(a, b));
  //   break;
  // case "divide":
  //   let divide = (a, b) => a / b;
  //   console.log(divide(a, b));
  //   break;
  // case "add":
  //   let add = (a, b) => a + b;
  //   console.log(add(a, b));
  //   break;
  // case "subtract":
  //   let subtract = (a, b) => a - b;
  //   console.log(subtract(a, b));
  //   break;
  //}
   if (calc == "multiply" ) {
    sum = a * b;
    
   } else if (calc == "divide"){
    sum = a / b;
    
   
   } else if (calc == "add"){
    sum = a + b;
   } else if (calc == "subtract"){
    sum = a - b;
   }

   console.log(sum)
   
}
calculate(20, 5, "divide");