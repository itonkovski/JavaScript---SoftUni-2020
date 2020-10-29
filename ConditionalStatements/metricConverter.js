function metricConventor (input, beginning, end) {
    input = Number(input);
    let result;

    if (beginning === "mm") {
        if (end === "m") {
            result = input / 1000;
        }
        else if (end === "cm") {
            result = input / 10;
        }
        else {
            result = input;
        }
    }
    else if (beginning === "cm") {
        if (end === "m") {
            result = input / 100;
        }
        else if (end === "mm") {
            result = input * 10;
        }
        else {
            result = input;
        }
    }
    else if (beginning === "m") {
        if (end === "cm") {
            result = input * 100;
        }
        else if ( end == "mm") {
            result = input * 1000;
        }
        else {
            result = input;
        }
    }
    console.log(result.toFixed(3));
}

metricConventor("150", "m", "cm");