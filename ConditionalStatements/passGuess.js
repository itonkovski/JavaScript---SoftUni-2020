function passGuess(pass) {
    let result = "s3cr3t!P@ssw0rd";
    if(pass == result) {
        console.log("Welcome");
    }
    else {
        console.log("Wrong password!");
    }
}

passGuess("s3cr3t!P@ssw0rd");