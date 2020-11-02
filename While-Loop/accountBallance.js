function accountBallance(input) {
    let currentInput = input[0];
    let index = 1;
    let currentSum = 0;
    while (currentInput !== "NoMoreMoney") {
        let deposit = Number(currentInput);
        if (deposit < 0) {
            console.log("Invalid operation!");
            break;
        }
        currentSum += deposit;
        console.log(`Increase: ${deposit.toFixed(2)}`);
        currentInput = input[index];
        index++;
    }
    console.log(`Total: ${currentSum.toFixed(2)}`);
}
accountBallance(["120",
"45.55",
"-150"]);