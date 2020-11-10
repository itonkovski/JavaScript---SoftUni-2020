function traveling(input) {
    let index = 2;
    let destination = input[0];
    let minBudget = Number(input[1]);
    let savingsCounter = 0;
    
    while(input[index] !== "End") {
        let currentAmmount = Number(input[index]);
        savingsCounter += currentAmmount;
        if (savingsCounter >= minBudget) {
            console.log(`Going to ${destination}!`);
            index++;
            destination = input[index];
            index++;
            minBudget = input[index];
            savingsCounter = 0;
            continue;
        }
        index++;
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