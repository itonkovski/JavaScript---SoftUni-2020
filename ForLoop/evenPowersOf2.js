function evenPowersOf2(input) {
    input = Number(input);
    let num = 1;

    for (let i = 0; i<= input; i+=2) {
        console.log(num);
        num = num * 4;
    }
}

evenPowersOf2("3");