function vacationCalcutations(excursionPrice,
    puzzelCount, talkingDollsCount, teddyBearsCount, minionsCount, trucksCount) {
    let puzzelPrice = 2.60;
    let talkingDollPrice = 3;
    let teddyBearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2; 

    puzzelCount = Number(puzzelCount);
    talkingDollsCount = Number(talkingDollsCount);
    teddyBearsCount = Number(teddyBearsCount);
    minionsCount = Number(minionsCount);
    trucksCount = Number(trucksCount);

    let toysSum = puzzelCount * puzzelPrice 
    + talkingDollsCount * talkingDollPrice 
    + teddyBearsCount * teddyBearPrice 
    + minionsCount * minionPrice 
    + trucksCount * truckPrice;

    let totalToysCount = puzzelCount + talkingDollsCount + teddyBearsCount + minionsCount + trucksCount;

    if(totalToysCount >= 50) {
        toysSum = toysSum - (toysSum * 0.25);
    }

    let sumAfterRent = toysSum - (toysSum * 0.10);

    if(sumAfterRent >= excursionPrice) {
        let totalSum = sumAfterRent - excursionPrice;
        console.log(`Yes! ${totalSum.toFixed(2)} lv left.`);
    }
    else {
        let totalSum = excursionPrice - sumAfterRent;
        console.log(`Not enough money! ${totalSum.toFixed(2)} lv needed.`);
    }
}

vacationCalcutations("320", "8", "2", "5", "5", "1");