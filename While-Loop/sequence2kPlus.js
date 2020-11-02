function sequence(input) {
    let counter = 1;
    let target = Number(input[0]);
    while (counter <= target) {
        console.log(counter)
        counter = counter * 2 + 1;
    }
}
sequence(["8"]);