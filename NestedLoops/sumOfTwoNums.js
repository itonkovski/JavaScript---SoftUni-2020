function sumOfTwoNums(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let isEqual = false;
    let comboCounter = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        for (let j = firstNum; j <= secondNum; j++) {
            comboCounter++;
            if (i + j === magicNum) {
                isEqual = true;
                console.log(`Combination N:${comboCounter} (${i} + ${j} = ${magicNum})`);
                break;
            }
        }
        if (isEqual === true) {
            break;
        }
    }
    if (isEqual === false) {
        console.log(`${comboCounter} combinations - neither equals ${magicNum}`);
    }
}
sumOfTwoNums(["23",
"24",
"20"]);