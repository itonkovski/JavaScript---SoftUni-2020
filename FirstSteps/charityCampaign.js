function charityCampaign(days, chefs, cakes, waffles, pancakes) {
    days = Number(days);
    chefs = Number(chefs);
    cakes = Number(cakes);
    waffles = Number(waffles);
    pancakes = Number(pancakes);

    let dailyCakes = cakes * 45;
    let dailyWaffles = waffles * 5.80;
    let dailyPancakes = pancakes * 3.20;
    let totalPerDay = (dailyCakes + dailyWaffles + dailyPancakes) * chefs;
    let companyTotal = totalPerDay * days;
    let totalSum = companyTotal - (companyTotal / 8);
    console.log(totalSum);
    
}

charityCampaign("23",
"8",
"14",
"30",
"16")