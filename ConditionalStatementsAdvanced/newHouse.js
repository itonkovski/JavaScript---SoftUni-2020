function flowersCalculations(typeOfFlowers, flowersCount, budget) {
    flowersCount = Number(flowersCount);
    budget = Number(budget);
    let price = 0;
    let sumLeft = 0;
    let sumNotEnough = 0;

    if(typeOfFlowers == "Roses") {
        price = flowersCount * 5;
        if(flowersCount > 80) {
            price -= price * 0.10;
        }
    }
    else if(typeOfFlowers == "Dahlias") {
        price = flowersCount * 3.80;
        if(flowersCount > 90) {
            price -= price * 0.15;
        }
    }
    else if(typeOfFlowers == "Tulips") {
        price = flowersCount * 2.80;
        if(flowersCount > 80) {
            price -= price * 0.15;
        }
    }
    else if(typeOfFlowers == "Narcissus") {
        price = flowersCount * 3;
        if(flowersCount < 120) {
            price += price * 0.15;
        }
    }
    else if(typeOfFlowers == "Gladiolus") {
        price = flowersCount * 2.50;
        if(flowersCount < 80) {
            price += price * 0.20;
        }
    }
    if(budget >= price) {
        sumLeft = budget - price;
        console.log(`Hey, you have a great garden with ${flowersCount} ${typeOfFlowers} and ${sumLeft.toFixed(2)} leva left.`)
    }
    else {
        sumNotEnough = price - budget;
        console.log(`Not enough money, you need ${sumNotEnough.toFixed(2)} leva more.`)
    }
}
flowersCalculations("Roses",
"55",
"250");