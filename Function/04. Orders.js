function order(product, quantity) {

    let coffeePrice = 1.5;
    let waterPrice = 1.0;
    let cokePrice = 1.4;
    let snacksPrice = 2.0;
    let total = 0;
  
    switch (product) {
      case "coffee":
        total= 1.5 * quantity;
        break;
      case "water":
        total = 1.0 * quantity;
        break;
      case "coke":
        total = 1.4 * quantity;
        break;
      case "snacks":
        total = 2.0 * quantity;
        break;
    }
    console.log(total.toFixed(2));
  }
  