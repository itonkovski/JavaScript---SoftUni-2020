function commisions(city, sales) {
    sales = Number(sales);
    let commision = 0.0;
    if (city == "Sofia") {
        if (sales >= 0.0 && sales <= 500) {
            commision = sales * 0.05;
            console.log(commision.toFixed(2));
        }
        else if (sales > 500 && sales <= 1000) {
            commision = sales * 0.07;
            console.log(commision.toFixed(2));
        }
        else if (sales > 1000 && sales <= 10000) {
            commision = sales * 0.08;
            console.log(commision.toFixed(2));
        }
        else if (sales > 10000) {
            commision = sales * 0.12;
            console.log(commision.toFixed(2));
        }
        else if (sale < 0) {
            console.log("error");
        }
    }
    else if (city == "Varna") {
        if (sales >= 0 && sales <= 500) {
            commision = sales * 0.045;
            console.log(commision.toFixed(2));
        }
        else if (sales > 500 && sales <= 1000) {
            commision = sales * 0.075;
            console.log(commision.toFixed(2));
        }
        else if (sales > 1000 && sales <= 10000) {
            commision = sales * 0.10;
            console.log(commision.toFixed(2));
        }
        else if (sales > 10000) {
            commision = sales * 0.13;
            console.log(commision.toFixed(2));
        }
        else if (sale < 0) {
            console.log("error");
        }
    }
    else if (city == "Plovdiv") {
        if (sales >= 0 && sales <= 500) {
            commision = sales * 0.055;
            console.log(commision.toFixed(2));
        }
        else if (sales > 500 && sales <= 1000) {
            commision = sales * 0.08;
            console.log(commision.toFixed(2));
        }
        else if (sales > 1000 && sales <= 10000) {
            commision = sales * 0.12;
            console.log(commision.toFixed(2));
        }
        else if (sales > 10000) {
            commision = sales * 0.145;
            console.log(commision.toFixed(2));
        }
        else if (sales < 0) {
            console.log("error");
        }
    }
    else {
        console.log("error");
    }
}
commisions("Sofia",
"0.6");