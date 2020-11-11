function solve(input) {
    let index = 0;
    let juryCount = Number(input[index++]);
    let presentationsCount = 0;
    let averageGrade = 0;

    let presentationName = input[index++]; 
    while (presentationName !== "Finish") {
        let presentationSum = 0;

        for(let i = 0; i < juryCount; i++) {
            let currentGrade = Number(input[index++]);
            presentationSum += currentGrade;
        }
        let presentationAverage = presentationSum / juryCount;
        console.log(`${presentationName} - ${presentationAverage.toFixed(2)}.`);
        presentationsCount++;
        averageGrade += presentationAverage;
        presentationName = input[index++];
    }
    console.log(`Student's final assessment is ${(averageGrade / presentationsCount).toFixed(2)}.`);
}
solve(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"]);