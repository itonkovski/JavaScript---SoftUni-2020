function dividedBy9(firstNum, secondNum) {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    let sum = 0;
    let outputNums = "";

    for (let i = firstNum; i <= secondNum; i++) {
        if (i % 9 == 0) {
            sum += i;
            outputNums = outputNums + i + "\n";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(outputNums);
}
dividedBy9("100", "200");