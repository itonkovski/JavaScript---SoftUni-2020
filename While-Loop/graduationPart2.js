function averageGrade(input) {
    let name = input[0];
    let index = 1;
    let year = 1;
    let excludedCount = 0;
    let gradeCounter = 0;
    while (year <= 12) {
        let currentInput = Number(input[index]);
        if (currentInput < 4.00) {
            excludedCount++;
            if (excludedCount === 2) {
                break;
            }
            continue;
        }
        gradeCounter += currentInput;
        year++;
        index++;
    }
    if (excludedCount == 2) {
        console.log(`${name} has been excluded at ${year} grade`);
    }
    else {
        console.log(`${name} graduated. Average grade: ${(gradeCounter / 12).toFixed(2)}`);
    }
}
averageGrade(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"]);