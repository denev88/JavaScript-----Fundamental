function solve(distance, passengers, price) {
    let neededFuel = (distance / 100) * 7;
    neededFuel += passengers * 0.1;
    let moneyCoast = neededFuel * price;
    console.log(`Needed money for that trip is ${moneyCoast} lv.`);
}
solve(260, 9, 2.49);
solve(90, 14, 2.88);