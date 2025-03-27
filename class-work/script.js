
percentageIncrease (newAmount - oldAmount / oldAmount) * 100

function calculatePercentageIncrease(oldAmount, newAmount){
    const percentageIncrease = (oldAmount - newAmount / oldAmount) * 100
    return percentageIncrease
}

let oldAmount = 2500;
let newAmount = 9000;

console.log(percentageIncrease)

function calculatePerIncrease(oldPrice, newPrice) {

    let percentageIncrease = ((newPrice - oldPrice) / oldPrice) * 100;
    
    console.log(The percentage increase of the data cost is: ${percentageIncrease}%);
}

  let oldPrice = 2500;
let newPrice = 9000;


calculatePerIncrease(oldPrice, newPrice);
