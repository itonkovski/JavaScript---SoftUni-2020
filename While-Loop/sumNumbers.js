function sumNums(input) {
    let target = input[0];
    let index = 1
    let sum = 0;
    let current = input[1];
    while (sum < target) {
        current = Number(input[index]);
        sum += current;
        index++;
    }
    console.log(sum);
}
sumNums(["20",
"1",
"2",
"3",
"4",
"5",
"6"]);