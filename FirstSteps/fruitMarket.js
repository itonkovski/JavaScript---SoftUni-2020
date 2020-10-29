function fruitMarket(strawberriesPrice, bananasPerKilo, orangesPerKilo, raspberriesPerKilo, strawberriesPerKilo) {
    strawberriesPrice = Number(strawberriesPrice);
    bananasPerKilo = Number(bananasPerKilo);
    orangesPerKilo = Number(orangesPerKilo);
    raspberriesPerKilo = Number(raspberriesPerKilo);
    strawberriesPerKilo = Number(strawberriesPerKilo);

    let raspberriesPrice = strawberriesPrice / 2;
    let orangesPrice = raspberriesPrice - (raspberriesPrice * 0.4);
    let bananssPrice = raspberriesPrice - (raspberriesPrice * 0.8);
    let totalSumRasp = raspberriesPerKilo * raspberriesPrice;
    let totalSumOranges = orangesPerKilo * orangesPrice;
    let totalSumBananas = bananasPerKilo * bananssPrice;
    let totalSumStraw = strawberriesPerKilo * strawberriesPrice;
    let totalSum = totalSumRasp + totalSumOranges + totalSumBananas + totalSumStraw;

    console.log(totalSum.toFixed(2));
    
}

fruitMarket("48",
"10",
"3.3",
"6.5",
"1.7");