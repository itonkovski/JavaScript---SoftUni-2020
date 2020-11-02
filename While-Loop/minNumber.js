function minNumber(input) {
    let currentInput = input[0];
    let minNum = Number.MAX_SAFE_INTEGER;
    let index = 1;

    while (currentInput !== "Stop") {
        let num = Number(currentInput);
        if (num < minNum) {
            minNum = num;
        }
        currentInput = input[index];
        index++;
    }
    console.log(`${minNum}`);
}
minNumber(["100",
"99",
"80",
"70",
"Stop"]);
