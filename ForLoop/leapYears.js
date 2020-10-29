function leapYears(leapYear, randomYear) {
    leapYear = Number(leapYear);
    randomYear = Number(randomYear);

    for (let i = leapYear; i <= randomYear; i+=4) {
        console.log(i);
    }
}
leapYears("1908",
"1919");