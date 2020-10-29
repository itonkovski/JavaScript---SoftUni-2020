function volleyball(year, holidaysCount, weekendsCount) {
    holidaysCount = Number(holidaysCount);
    weekendsCount = Number(weekendsCount);

    let weekendsInTheYear = 48 - weekendsCount;
    let weekendsInSofia = weekendsInTheYear * 3 / 4;
    let gamesDuringHolidays = holidaysCount * 2 / 3;
    let gamesHolidayAndSofiaTotal = weekendsInSofia + weekendsCount + gamesDuringHolidays;
    let extraGamesDuringLeap = 0;
    let totalGames = 0;

    if (year == "leap") {
        extraGamesDuringLeap = gamesHolidayAndSofiaTotal * 0.15;
        totalGames = extraGamesDuringLeap +gamesHolidayAndSofiaTotal;
        console.log(`${Math.floor(totalGames)}`);
    }
    else {
        console.log(`${Math.floor(gamesHolidayAndSofiaTotal)}`);
    }
}
volleyball("leap",
"2",
"3");