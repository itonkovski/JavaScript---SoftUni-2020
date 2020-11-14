function solve(input) {
    let index = 0;
    let days = Number(input[index++]);

    let totalWins = 0;
    let totalLosses = 0;
    let totalMoneyRaised = 0;

    for(let day = 1; day <= days; day++) {
        let gameType = input[index++];
        let dailyWins = 0;
        let dailyLosses = 0;
        let dailyMoney = 0;
        while (gameType !== "Finish") {
            let isWin = input[index++] === "win";

            if (isWin) {
                dailyWins++;
                dailyMoney += 20;
            }
            else {
                dailyLosses++;
            }

            gameType = input[index++];
        }
        if (dailyWins > dailyLosses) {
            dailyMoney += 0.1 * dailyMoney;
            totalWins++;
        }
        else {
            totalLosses++;
        }
        totalMoneyRaised += dailyMoney;
    }
    if (totalWins > totalLosses) {
        totalMoneyRaised += 0.2 * totalMoneyRaised;
        console.log(`You won the tournament! Total raised money: ${totalMoneyRaised.toFixed(2)}`);
    }
    else {
        console.log(`You lost the tournament! Total raised money: ${totalMoneyRaised.toFixed(2)}`);
    }
}
solve(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"]);