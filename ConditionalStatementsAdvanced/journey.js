function holidayPlanning(budget, season) {
    budget = Number(budget);
    let destination;
    let accomodation;
    let price = 0;
    
    if(budget <= 100) {
        destination = "Bulgaria";
        if(season == "summer") {
            accomodation = "Camp";
            price = budget * 0.30;
        }
        else if(season == "winter") {
            accomodation = "Hotel";
            price = budget * 0.70;
        }
    }
    else if(budget <= 1000) {
        destination = "Balkans";
        if(season == "summer") {
            accomodation = "Camp";
            price = budget * 0.40;
        }
        else if(season == "winter") {
            accomodation = "Hotel";
            price = budget * 0.80;
        }
    }
    else if(budget > 1000) {
        destination = "Europe";
        if(season == "summer") {
            accomodation = "Hotel";
            price = budget * 0.90;
        }
        else if(season == "winter") {
            accomodation = "Hotel";
            price = budget * 0.90;
        }
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${accomodation} - ${price.toFixed(2)}`);
}
holidayPlanning("75", "winter");