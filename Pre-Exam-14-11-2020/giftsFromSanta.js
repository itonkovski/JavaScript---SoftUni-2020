function solve(input) {
    let n = Number(input[0]);
    let m = Number(input[1]);
    let s = Number(input[2]);
    let output = '';

    for (let i = m; i >= n; i--) {
        if (i % 2 == 0 && i % 3 == 0) {
            if (i === s) {
                break;
            }
            output += i + ' ';
        }
    }
    console.log(output);
}
solve(['1',
    '30',
    '15']);