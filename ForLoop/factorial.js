function factorial(input) {
    input = Number(input);
    let formula = 1;

    for (let i = 1; i < input; i++) {
        formula *= (i + 1);
    }
    console.log(formula);
}
factorial("4");