// let oldAmount = 2500;
// let newAmount = 9000;

function calculatePercentageIncrease(oldAmount, newAmount){
    const percentageIncrease = ((newAmount - oldAmount) / oldAmount) * 100
    return percentageIncrease;
}

let oldPrice = 2500;
let newPrice = 9000;

const result = calculatePercentageIncrease(oldPrice, newPrice);

console.log(`The percentage increase in cost is: ${result}%`);


