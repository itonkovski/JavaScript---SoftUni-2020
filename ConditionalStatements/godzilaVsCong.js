function movieCalculations(budget, statistsCount, clothingPricePerOne) {
    budget = Number(budget);
    statistsCount = Number(statistsCount);
    clothingPricePerOne = Number(clothingPricePerOne);

    let decorSum = budget * 0.10;
    let clothingTotalSum = statistsCount * clothingPricePerOne;
    if (statistsCount > 150) {
        clothingTotalSum -= clothingTotalSum * 0.1;
    }
    let totalAmount = decorSum + clothingTotalSum;
    
    if (totalAmount > budget) {
        console.log("Not enough money!");
        let moneyNotEnough = totalAmount - budget;
        console.log(`Wingard needs ${moneyNotEnough.toFixed(2)} leva more.`)
    }
    else {
        console.log("Action!");
        let moneyLeft = budget - totalAmount;
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }

}

movieCalculations("15437.62",
"186",
"57.99");