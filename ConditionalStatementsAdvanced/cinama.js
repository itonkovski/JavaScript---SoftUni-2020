function ticketCalculations(type, rows, columns) {
    rows = Number(rows);
    collums = Number(columns);
    let income = 0;

    if (type == "Premiere") {
        income = rows * columns * 12;
    }
    else if (type == "Normal") {
        income = rows * columns * 7.50;
    }
    else if (type == "Discount") {
        income = rows * columns * 5;
    }
    console.log(`${income.toFixed(2)} leva`);
}
ticketCalculations("Premiere",
"10",
"12");