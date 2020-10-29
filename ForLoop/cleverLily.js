function cleverLily(age, price, pricePerToy) {
    age = Number(age);
    price = Number(price);
    pricePerToy = Number(pricePerToy);

    let sum = 0;
    let toysCount = 0;
    let evenBDCount = 0;

    for (let i = 1; i <= age; i++) {
        if ( i % 2 == 0) {
            evenBDCount++;
            sum += evenBDCount * 9;
        }
        else {
            toysCount += 1;
            sum += pricePerToy;
        }
    }
    if (sum >= price) {
        let moneyLeft = sum - price;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    }
    else {
        let moneyNotEnough = price - sum;
        console.log(`No! ${moneyNotEnough.toFixed(2)}`);
    }
}
cleverLily("10", "170", "6");