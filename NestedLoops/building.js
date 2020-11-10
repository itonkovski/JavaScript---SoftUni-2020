function solve(input) {
    let floorsCount = Number(input[0]);
    let roomsCountPerFloor = Number(input[1]);

    for (let i = floorsCount; i > 0; i--) {
        let printLine = "";
        for (let j = 0; j < roomsCountPerFloor; j++) {
            if (i == floorsCount) {
                printLine += "L" + i + j + " ";
            }
            else if (i % 2 == 0) {
                printLine += "O" + i + j + " ";
            }
            else {
                printLine += "A" + i + j + " ";
            }
        }
        console.log(printLine)
    }
}
solve(["9", "5"]);