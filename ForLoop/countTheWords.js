function countTheWords(input) {
    let words = 0;

    for (let i = 0; i < input.length; i++) {
        let current = input[i];

        if (current === " ") {
            words++;
        }
    }
    words++;
    if (words > 10) {
        console.log(`The message is too long to be send! Has ${words} words.`)
    }
    else {
        console.log(`The message was send successfully!`);
    }
}
countTheWords("This message has exactly eleven words. One more as it's allowed!");