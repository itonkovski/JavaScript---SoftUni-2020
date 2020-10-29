function solve(input) {
    let n = Number(input[0]);
    let lowestNum = Number(input[1]);

    for (let i = 1; i < input.length; i++) {
        let currentNum = Number(input[i]);

        if (currentNum < lowestNum) {
            lowestNum = currentNum;
        }
    }
    console.log(`${lowestNum}`);
}
solve(["4",
"45",
"-20",
"7",
"99"]);