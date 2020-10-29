function sumSeconds (firstPlayer, secondPlayer, thirdPlayer) {
    firstPlayer = Number(firstPlayer);
    secondPlayer = Number(secondPlayer);
    thirdPlayer = Number(thirdPlayer);

    let totalTime = firstPlayer + secondPlayer + thirdPlayer;
    let minutes = Math.floor(totalTime/60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    }
    else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumSeconds("35", "45", "44");