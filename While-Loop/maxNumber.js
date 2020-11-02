function maxNum(input) {
    let currentInput = input[0];
    let maxNum = Number.MIN_SAFE_INTEGER;
    let index = 1;
    while (currentInput !== "Stop") {
        let num = Number(currentInput);
        if (num > maxNum) {
            maxNum = num;
        }
        currentInput = input[index];
        index++;
    }
    console.log(`${maxNum}`);
}
maxNum(["45",
"-20",
"7",
"99",
"Stop"]);