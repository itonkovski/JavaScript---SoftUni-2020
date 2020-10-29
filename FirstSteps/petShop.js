function petShopCalculations(dogCount, othersCount) {
    let dogResults = dogCount * 2.50;
    let othersResults = othersCount * 4;
    let allResults = dogResults + othersResults;
    console.log(`${allResults} lv.`);
}

petShopCalculations("5", "4");