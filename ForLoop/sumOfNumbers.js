function sumNums(input) {
    //input = Number(input);
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        let num = Number(input[i]);
        sum += num;
    }
    console.log(`The sum of the digits is:${sum}`);
}
sumNums("564891");