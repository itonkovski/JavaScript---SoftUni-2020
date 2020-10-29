function fishingBoatCalculations(budget, season, countOfFisherman) {
    budget = Number(budget);
    countOfFisherman = Number(countOfFisherman);
    let price = 0;
    let moneyLeft = 0;
    let moneyNotEnough = 0;

    if(season == "Spring") {
        price = 3000;

        if(countOfFisherman <= 6) {
            price -= price * 0.10;
        }
        else if(countOfFisherman >= 7 && countOfFisherman <= 11) {
            price -= price * 0.15;
        }
        else if(countOfFisherman >= 12) {
            price -= price * 0.25;
        }
    }
    else if(season == "Summer" || season == "Autumn") {
        price = 4200;
        if(countOfFisherman <= 6) {
            price -= price * 0.10;
        }
        else if(countOfFisherman >= 7 && countOfFisherman <= 11) {
            price -= price * 0.15;
        }
        else if(countOfFisherman >= 12) {
            price -= price * 0.25;
        }
    }
    else if(season == "Winter") {
        price = 2600;
        if(countOfFisherman <= 6) {
            price -= price * 0.10;
        }
        else if(countOfFisherman >= 7 && countOfFisherman <= 11) {
            price -= price * 0.15;
        }
        else if(countOfFisherman >= 12) {
            price -= price * 0.25;
        }
    }
    if(countOfFisherman % 2 == 0 && season != "Autumn") {
        price -= price * 0.05;
    }

    if(budget >= price) {
        moneyLeft = budget - price;
        console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`)
    }
    else {
        moneyNotEnough = price - budget;
        console.log(`Not enough money! You need ${moneyNotEnough.toFixed(2)} leva.`)
    }
}
fishingBoatCalculations("2000",
"Winter",
"13");