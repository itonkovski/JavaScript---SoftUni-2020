function solve(input) {
    let destination = "";
    while (destination !== "End") {
        destination = input.shift();
        let priceDestination = Number(input.shift());
        let saving = 0;
        for (let savingTotal = 0; savingTotal < priceDestination;) {
            saving = Number(input.shift());
            savingTotal += saving;
            if (savingTotal >= priceDestination) {
                console.log(`Going to ${destination}!`)
            }
        }
    }
}

traveling(["Greece",
"1000",
"200",
"200",
"300",
"100",
"150",
"240",
"Spain",
"1200",
"300",
"500",
"193",
"423",
"End"]);