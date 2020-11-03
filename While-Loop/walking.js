function solve(input) {
    let target = 10000;
    let index = 0;
    let stepsCount = 0;

    while (stepsCount < target) {
        let currentInput = input[index++];
        if (currentInput === `Going home`) {
            stepsCount += Number(input[index++]);
            break;
        }
        stepsCount += Number(currentInput);
    }
    if (stepsCount >= target) {
        console.log(`Goal reached! Good job!`);
        console.log(`${stepsCount - target} steps over the goal!`);
    }
    else {
        console.log(`${target - stepsCount} more steps to reach goal.`);
    }
}

solve(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"]);