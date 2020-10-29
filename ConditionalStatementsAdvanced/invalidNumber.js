function invalidNumber(input) {
    input = Number(input);
    if (input >= 100 && input <= 200 || input == 0) {
        console.log("");
    }
    else {
        console.log("invalid");
    }

}
invalidNumber(75);