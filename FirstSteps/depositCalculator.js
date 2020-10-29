function depositCalculator(ammount, months, interest) {
    ammount = Number(ammount);
    months = Number(months);
    interest = Number(interest);

    let totalInterest = ammount * interest / 100;
    let interestForMonth = totalInterest / 12;
    let totalSum = ammount + (months * interestForMonth);
    console.log(totalSum);

}

depositCalculator("200",
"3",
"5.7")